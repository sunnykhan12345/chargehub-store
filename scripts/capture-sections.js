const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

async function captureSections() {
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
    await new Promise(r => setTimeout(r, 1200));

    await send('Emulation.setDeviceMetricsOverride', {
      width: 375,
      height: 812,
      deviceScaleFactor: 1,
      mobile: true
    });

    const sections = [
      { id: '#accueil', name: 'section-hero' },
      { id: '#a-propos', name: 'section-about' },
      { id: '#bonnes-affaires', name: 'section-deals' },
      { id: '#categories', name: 'section-categories' },
      { id: '#meilleures-ventes', name: 'section-bestsellers' },
      { id: '#avis', name: 'section-reviews' },
      { id: '#contact', name: 'section-contact' }
    ];

    for (const sec of sections) {
      await send('Runtime.evaluate', {
        expression: `document.querySelector('${sec.id}')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
      });
      await new Promise(r => setTimeout(r, 400));

      const screenshot = await send('Page.captureScreenshot', {
        format: 'png',
        captureBeyondViewport: false
      });

      fs.writeFileSync(`mobile-375-${sec.name}.png`, Buffer.from(screenshot.data, 'base64'));
      console.log(`Saved mobile-375-${sec.name}.png`);
    }

    ws.close();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    chrome.kill();
  }
}

captureSections();
