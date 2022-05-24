#!/usr/bin/env node

////////// Configuration //////////

const parallel = 8  // How many pages should be loaded at a time?
const urlsFile = 'urls-example.txt' // What file should urls be read in from?
const outputFolder = 'screenshots' // What folder should the screenshots be put in?

///////////////////////////////////

// Dependencies
const puppeteer = require('puppeteer')
const fs = require('fs')
const sleep = (ms) => {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}

// create outputFolder if it doesn't exist
if (!fs.existsSync(outputFolder)){
  fs.mkdirSync(outputFolder);
}

// Read urls in from txt file, don't incluce http(s)// on each line
const urls = fs.readFileSync(urlsFile).toString().split('\n')

const getScreenshots = async (urls, parallel) => {
  const parallelBatches = Math.ceil(urls.length / parallel)
  console.log('URLs: ' + urls.length + '\n' +
              parallelBatches + ' batches with ' + parallel + ' screenshots per batch');
  
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
      // only proceed if there is an element on the page
      if (urls[elem] != undefined) {
        promises.push(browser.newPage().then(async page => {
          await page.setViewport({ width: 1280, height: 800 })
          try {
            // Only create screenshot if page.goto doesn't get an error
            await page.goto('http://' + urls[elem])
            // strip out http(s):// from filename if its in there
            let nohttp = urls[elem].replace(/http[s]{0,1}:\/\//g,"")
            // strip out special characters from filenames
            let filename = nohttp.replace(/[\W_]+/g,"-");
            // sleep 2 seconds to account for those dang splash screens
            await sleep(2000)
            // make the screenshot
            await page.screenshot({ path: outputFolder + '/' + filename + '.png' }).then(console.log('[+]  ' + urls[elem]))
          } catch (err) {
            // if there is an error, eturn the error (usually this is "undefined," meaning nothing was on the page)
            console.log(console.log('[X] ' + urls[elem]))
          }
        }))
      }
    }

    // Close the browser on our way out
    await Promise.all(promises)
    await browser.close()
  }
}

getScreenshots(urls, parallel)
