// https://github.com/GoogleChrome/puppeteer

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://jadin.me');
  await page.screenshot({path: 'jadinme.png'});

  await browser.close();
})();