const { spawn } = require('child_process');
const http = require('http');

async function run() {
  const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=9222',
    '--window-size=375,812',
    'http://127.0.0.1:3005'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const list = await new Promise((resolve, reject) => {
      http.get('http://127.0.0.1:9222/json', (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(JSON.parse(data)));
      }).on('error', reject);
    });

    const page = list.find(p => p.type === 'page');
    if (!page || !page.webSocketDebuggerUrl) {
      console.log('No page found, targets:', list);
      return;
    }

    const ws = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });

    let id = 1;
    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const msgId = id++;
        const handler = (event) => {
          const msg = JSON.parse(event.data);
          if (msg.id === msgId) {
            ws.removeEventListener('message', handler);
            resolve(msg.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    }

    // Set device metrics to 375x812 with scale factor 1
    await send('Emulation.setDeviceMetricsOverride', {
      width: 375,
      height: 812,
      deviceScaleFactor: 1,
      mobile: true
    });

    // Evaluate window and document metrics
    const evalRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const winW = window.innerWidth;
        const winH = window.innerHeight;
        const docScrollW = document.documentElement.scrollWidth;
        const bodyScrollW = document.body.scrollWidth;

        const overflowing = [];
        document.querySelectorAll('*').forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.right > winW + 1) {
            overflowing.push({
              tag: el.tagName,
              id: el.id,
              cls: typeof el.className === 'string' ? el.className.slice(0, 60) : '',
              rectRight: Math.round(rect.right),
              rectWidth: Math.round(rect.width)
            });
          }
        });

        return { winW, winH, docScrollW, bodyScrollW, overflowing: overflowing.slice(0, 15) };
      })()`,
      returnByValue: true
    });

    console.log('DOM Evaluation Result:');
    console.log(JSON.stringify(evalRes.result.value, null, 2));

    ws.close();
  } catch (err) {
    console.error('Inspect error:', err);
  } finally {
    chrome.kill();
  }
}

run();
