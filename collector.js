const puppeteer = require('puppeteer');
const parallel = 4
const sleep = (ms) => {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}

const urls = [ 
  'http://techbar.knight.domains',
]

const getScreenshots = async (urls, parallel) => {
  const parallelBatches = Math.ceil(urls.length / parallel)
  console.log('URLs: ' + urls.length + '\n' +
              parallelBatches + ' batch(es) of ' + parallel + ' screenshots ');
  
  // split up the array of urls
  let k = 0
  for (let i = 0; i < urls.length; i += parallel) {
    k++
    console.log('\nBatch ' + k + ' of ' + parallelBatches)
    const browser = await puppeteer.launch();
    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();
    page.setJavaScriptEnabled(false)

    const promises = []
    for (let j = 0; j < parallel; j++) {
      let elem = i + j
      // only proceed if there is an element
      if (urls[elem] != undefined) {
        promises.push(browser.newPage().then(async page => {
          await page.setViewport({ width: 1280, height: 800 })
          try {
            // Only create screenshot if page.goto get's no error
            await page.goto(urls[elem])
            // strip out https:// from filename
            let nohttp = urls[elem].replace(/http[s]{0,1}:\/\//g,"")
            // strip out special characters from filenames
            let filename = nohttp.replace(/[\W_]+/g,"-");
            // sleep 2 seconds to account for those dang splash screens
            await sleep(2000)
            await page.screenshot({ path: filename + '.png' }).then(console.log(urls[elem] + ' ✅'))
          } catch (err) {
            console.log(console.log(urls[elem] + ' ❌'))
          }
        }))
      }
    }

    // await promise all and close browser
    await Promise.all(promises)
    await browser.close()
  }
}

getScreenshots(urls, parallel)