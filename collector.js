const puppeteer = require('puppeteer');
const parallel = 4

const urls = [ 
  'adambrandt.knight.domains',
  'anamaria.knight.domains',
  'art.knight.domains',
  'autumm.knight.domains',
  'bethlampereur.knight.domains',
  'collin.knight.domains',
  'collinellenbecker.knight.domains',
  'crnooyen.knight.domains',
  'dandersonlion.knight.domains',
  'drcowell.knight.domains',
  'emiliesmith.knight.domains',
  'emilyyounkle.knight.domains',
  'erikaditz.knight.domains',
  'graemegallagher.knight.domains',
  'hannahairoldi.knight.domains',
  'janelleknick.knight.domains',
  'johnpennington.knight.domains',
  'johnstrojny.knight.domains',
  'katlinvanderlin.knight.domains',
  'kendall.knight.domains',
  'knight.domains',
  'kylecl.knight.domains',
  'magnagodspeed.knight.domains',
  'marcykohlbeck.knight.domains',
  'megangundrum.knight.domains',
  'morgansworkingword.knight.domains',
  'neil.knight.domains',
  'noahfidlin.knight.domains',
  'parisa.knight.domains',
  'ruthie.knight.domains',
  'ryannygaard.knight.domains',
  'samkillian.knight.domains',
  'savanna.knight.domains',
  'taylor.knight.domains',
  'southafrica.adambrandt.knight.domains',
  '2018fall150c.anamaria.knight.domains',
  '2018fall150d.anamaria.knight.domains',
  'rome.art.knight.domains',
  'hidden.autumm.knight.domains',
  'english305.bethlampereur.knight.domains',
  'english305.collin.knight.domains',
  'english305.collinellenbecker.knight.domains',
  'techbar.crnooyen.knight.domains',
  'fsl.crnooyen.knight.domains',
  'cvabook.dandersonlion.knight.domains',
  'researchblog.dandersonlion.knight.domains',
  'ddmlab.drcowell.knight.domains',
  'english305.emiliesmith.knight.domains',
  'english305.emilyyounkle.knight.domains',
  'engl305.erikaditz.knight.domains',
  '305engl.erikaditz.knight.domains',
  'english305.graemegallagher.knight.domains',
  'hannahairoldi.com.hannahairoldi.knight.domains',
  'hairoldi.hannahairoldi.knight.domains',
  'english305.janelleknick.knight.domains',
  'english305.johnpennington.knight.domains',
  'english305.johnstrojny.knight.domains',
  'english305.katlinvanderlin.knight.domains',
  'english305.kendall.knight.domains',
  't3.knight.domains',
  'blog.knight.domains',
  't3snc.knight.domains',
  'techbar.knight.domains',
  'eng305.kylecl.knight.domains',
  'eng305.magnagodspeed.knight.domains',
  'english305.marcykohlbeck.knight.domains',
  'english305.megangundrum.knight.domains',
  '305literarytheory.morgansworkingword.knight.domains',
  'gloudemans.neil.knight.domains',
  'english305.noahfidlin.knight.domains',
  'art.noahfidlin.knight.domains',
  'geog155.parisa.knight.domains',
  'geog225.parisa.knight.domains',
  'council.ruthie.knight.domains',
  'english305.ryannygaard.knight.domains',
  'english305.samkillian.knight.domains',
  'english305.savanna.knight.domains',
  'engl305.taylor.knight.domains',
  'taylorjadin.taylor.knight.domains',
  'english305.taylor.knight.domains',
  'abbierose.knight.domains',
  'allison.knight.domains',
  'allyson.knight.domains',
  'alukens.knight.domains',
  'alyssa.knight.domains',
  'amhart.knight.domains',
  'angelesjimenez.knight.domains',
  'anneoleniczak.knight.domains',
  'annicka.knight.domains',
  'annikaneerdaels.knight.domains',
  'audreyshreiner.knight.domains',
  'austinwalls.knight.domains',
  'baovan.knight.domains',
  'bensplayground.knight.domains',
  'bradford.knight.domains',
  'brenthatfield.knight.domains',
  'briannabraegerart.knight.domains',
  'bvb.knight.domains',
  'careers.knight.domains',
  'carolyne-roepke.knight.domains',
  'cheneeblock.knight.domains',
  'corday.knight.domains',
  'danmartinucci.knight.domains',
  'demo.knight.domains',
  'devinmorrisroe.knight.domains',
  'dhunnicutt.knight.domains',
  'diazrenzo.knight.domains',
  'elynorgregorich.knight.domains',
  'ericademonstration.knight.domains',
  'erikagelhausen.knight.domains',
  'fullspectrumlearning.knight.domains',
  'gateway.knight.domains',
  'goglobal.knight.domains',
  'gracebeno.knight.domains',
  'hbuczek.knight.domains',
  'jacoblaubacher.knight.domains',
  'jaredwiesman.knight.domains',
  'jarodglander.knight.domains',
  'jasmine-babineaux.knight.domains',
  'jessicahorton.knight.domains',
  'john.knight.domains',
  'johnhewitt.knight.domains',
  'johnwierzba.knight.domains',
  'jonnivanrite.knight.domains',
  'josh.knight.domains',
  'karensuarez.knight.domains',
  'kasey.knight.domains',
  'kayla-mitchell.knight.domains',
  'krissylukens.knight.domains',
  'kyra.knight.domains',
  'kyrakronberg.knight.domains',
  'laubaysd.knight.domains',
  'lauren.knight.domains',
  'lex.knight.domains',
  'lindseymn.knight.domains',
  'maddiewaise.knight.domains',
  'madeline.knight.domains',
  'madelinechristel.knight.domains',
  'madelynglosny.knight.domains',
  'malloryshefchik.knight.domains',
  'marissa.knight.domains',
  'mark.knight.domains',
  'marybethkoss.knight.domains',
  'mattbattaglia.knight.domains',
  'maverick.knight.domains',
  'mayaschwamlien.knight.domains',
  'mcinar.knight.domains',
  'meghanlambgraphicdesign.knight.domains',
  'michaelrosewall.knight.domains',
  'namauro.knight.domains',
  'natalieolson.knight.domains',
  'nathanbudde.knight.domains',
  'nigl.knight.domains',
  'niudiva.knight.domains',
  'norbyknight.com',
  'notyouraveragejulia.knight.domains',
  'oliviasmidel.knight.domains',
  'paigewortman.knight.domains',
  'paulj.knight.domains',
  'peytonaria.knight.domains',
  'pkramper.knight.domains',
  'rebecka.knight.domains',
  'ronaldomoran.knight.domains',
  'saradegroot.knight.domains',
  'sarahp.knight.domains',
  'savannafrisque.knight.domains',
  'shielamaeholder.knight.domains',
  'spencertalbot.knight.domains',
  'sprague.knight.domains',
  'sydneynetko.knight.domains',
  'sydneyzima.knight.domains',
  'thirdbornmarlow.knight.domains',
  'vinci.knight.domains',
  'willgolubeff.knight.domains',
  'willsart.knight.domains'
]

const getScreenshots = async (urls, parallel) => {
  const parallelBatches = Math.ceil(urls.length / parallel)
  console.log('URLs: ' + urls.length + '\n' +
              parallelBatches + ' batches of ' + parallel + ' screenshots ');
  
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

    console.log('\nI finished this batch. I\'m ready for the next batch');
  }
}

getScreenshots(urls, parallel)