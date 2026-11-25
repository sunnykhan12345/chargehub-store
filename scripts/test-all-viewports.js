const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const viewports = [
  { name: 'Mobile-320px', width: 320, height: 667, mobile: true },
  { name: 'Mobile-375px', width: 375, height: 812, mobile: true },
  { name: 'Mobile-390px', width: 390, height: 844, mobile: true },
  { name: 'Mobile-430px', width: 430, height: 932, mobile: true },
  { name: 'Tablet-768px', width: 768, height: 1024, mobile: false },
  { name: 'Laptop-1024px', width: 1024, height: 768, mobile: false },
  { name: 'Desktop-1366px', width: 1366, height: 768, mobile: false },
  { name: 'LargeDesktop-1920px', width: 1920, height: 1080, mobile: false },
];

async function runTests() {
  const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=9222',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));

  try {
    const list = await new Promise((resolve, reject) => {
      http.get('http://127.0.0.1:9222/json', (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(JSON.parse(data)));
      }).on('error', reject);
    });

    const page = list.find(p => p.type === 'page');
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

    await send('Page.enable');
    await send('Page.navigate', { url: 'http://127.0.0.1:3005' });
    await new Promise(r => setTimeout(r, 1500));

    const results = [];

    for (const vp of viewports) {
      await send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 1,
        mobile: vp.mobile
      });

      await new Promise(r => setTimeout(r, 400));

      const evalRes = await send('Runtime.evaluate', {
        expression: `(() => {
          const winW = window.innerWidth;
          const scrollW = document.documentElement.scrollWidth;
          const bodyW = document.body.scrollWidth;
          const badElements = [];
          document.querySelectorAll('*').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.right > winW + 1) {
              badElements.push(el.tagName + (el.id ? '#' + el.id : '') + (typeof el.className === 'string' && el.className ? '.' + el.className.split(' ')[0] : ''));
            }
          });
          return { winW, scrollW, bodyW, hasOverflow: scrollW > winW || bodyW > winW, badCount: badElements.length, sampleBad: badElements.slice(0, 3) };
        })()`,
        returnByValue: true
      });

      const metrics = evalRes.result.value;

      const screenshot = await send('Page.captureScreenshot', {
        format: 'png',
        captureBeyondViewport: false
      });

      const filename = `screenshot-${vp.name}.png`;
      fs.writeFileSync(filename, Buffer.from(screenshot.data, 'base64'));

      results.push({
        name: vp.name,
        targetWidth: vp.width,
        actualWinWidth: metrics.winW,
        scrollWidth: metrics.scrollW,
        bodyWidth: metrics.bodyW,
        hasOverflow: metrics.hasOverflow,
        badCount: metrics.badCount,
        screenshot: filename,
        status: !metrics.hasOverflow && metrics.badCount === 0 ? 'PASSED' : 'FAILED'
      });
    }

    console.log('\n=== VIEWPORT TEST RESULTS ===');
    console.table(results);

    const allPassed = results.every(r => r.status === 'PASSED');
    console.log(allPassed ? '\nALL 8 VIEWPORTS PASSED WITH ZERO HORIZONTAL SCROLL!' : '\nSOME VIEWPORTS FAILED!');

    ws.close();
  } catch (err) {
    console.error('Test error:', err);
  } finally {
    chrome.kill();
  }
}

runTests();
