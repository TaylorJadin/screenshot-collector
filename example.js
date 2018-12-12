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
  'http://collinellenbecker.knight.domains',
  'http://crnooyen.knight.domains',
  'http://dandersonlion.knight.domains',
  'http://drcowell.knight.domains',
  'http://emiliesmith.knight.domains',
  'http://emilyyounkle.knight.domains',
  'http://erikaditz.knight.domains',
  'http://graemegallagher.knight.domains',
  'http://hannahairoldi.knight.domains',
  'http://janelleknick.knight.domains',
  'http://johnpennington.knight.domains',
  'http://johnstrojny.knight.domains',
  'http://katlinvanderlin.knight.domains',
  'http://kendall.knight.domains',
  'http://knight.domains',
  'http://kylecl.knight.domains',
  'http://magnagodspeed.knight.domains',
  'http://marcykohlbeck.knight.domains',
  'http://megangundrum.knight.domains',
  'http://morgansworkingword.knight.domains',
  'http://neil.knight.domains',
  'http://noahfidlin.knight.domains',
  'http://parisa.knight.domains',
  'http://ruthie.knight.domains',
  'http://ryannygaard.knight.domains'
]

for (let item of urls) {
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let filename = item.replace(/[\W_]+/g,"-");
  await page.setViewport({width: 1280, height: 720})
  await page.goto(item);
  await sleep(1500);
  await page.screenshot({path: filename + '.png'});
  await browser.close();
})();
}