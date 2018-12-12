const puppeteer = require('puppeteer');

const sleep = (ms) => {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}

let urls = [ 
  'http://adambrandt.knight.domains',
  'http://anamaria.knight.domains',
  'http://art.knight.domains',
  'http://autumm.knight.domains',
  'http://bethlampereur.knight.domains',
  'http://collin.knight.domains',
]

for (let item of urls) {
  (async () => {
    const browser = await puppeteer.launch({
      headless: true
    });
    const page = await browser.newPage();
    let nohttp = item.replace(/http[s]{0,1}:\/\//g,"")
    let filename = nohttp.replace(/[\W_]+/g,"-");
    try  {
      await page.setViewport({width: 1280, height: 720})
      await page.goto(item);
      await console.log(item);
      await sleep(1500);
      await page.screenshot({path: filename + '.png'});
      browser.close();
    }
    catch (error) {
      console.log(error);
    }
  })();
  }