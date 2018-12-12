// https://github.com/GoogleChrome/puppeteer

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

var i,j,chunkyURLs,chunk = 3;
for (i=0,j=urls.length; i<j; i+=chunk) {
  chunkyURLs = urls.slice(i,i+chunk);
  console.log(i);
  console.log(chunkyURLs);
}

for (let item of chunkyURLs) {
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