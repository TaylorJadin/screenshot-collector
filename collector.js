const puppeteer = require('puppeteer');
const parallel = 4

const urls = [ 
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
  'http://ryannygaard.knight.domains',
  'http://samkillian.knight.domains',
  'http://savanna.knight.domains',
  'http://taylor.knight.domains',
  'http://southafrica.adambrandt.knight.domains',
  'http://2018fall150c.anamaria.knight.domains',
  'http://2018fall150d.anamaria.knight.domains',
  'http://rome.art.knight.domains',
  'http://hidden.autumm.knight.domains',
  'http://english305.bethlampereur.knight.domains',
  'http://english305.collin.knight.domains',
  'http://english305.collinellenbecker.knight.domains',
  'http://techbar.crnooyen.knight.domains',
  'http://fsl.crnooyen.knight.domains',
  'http://cvabook.dandersonlion.knight.domains',
  'http://researchblog.dandersonlion.knight.domains',
  'http://ddmlab.drcowell.knight.domains',
  'http://english305.emiliesmith.knight.domains',
  'http://english305.emilyyounkle.knight.domains',
  'http://engl305.erikaditz.knight.domains',
  'http://305engl.erikaditz.knight.domains',
  'http://english305.graemegallagher.knight.domains',
  'http://hannahairoldi.com.hannahairoldi.knight.domains',
  'http://hairoldi.hannahairoldi.knight.domains',
  'http://english305.janelleknick.knight.domains',
  'http://english305.johnpennington.knight.domains',
  'http://english305.johnstrojny.knight.domains',
  'http://english305.katlinvanderlin.knight.domains',
  'http://english305.kendall.knight.domains',
  'http://t3.knight.domains',
  'http://blog.knight.domains',
  'http://t3snc.knight.domains',
  'http://techbar.knight.domains',
  'http://eng305.kylecl.knight.domains',
  'http://eng305.magnagodspeed.knight.domains',
  'http://english305.marcykohlbeck.knight.domains',
  'http://english305.megangundrum.knight.domains',
  'http://305literarytheory.morgansworkingword.knight.domains',
  'http://gloudemans.neil.knight.domains',
  'http://english305.noahfidlin.knight.domains',
  'http://art.noahfidlin.knight.domains',
  'http://geog155.parisa.knight.domains',
  'http://geog225.parisa.knight.domains',
  'http://council.ruthie.knight.domains',
  'http://english305.ryannygaard.knight.domains',
  'http://english305.samkillian.knight.domains',
  'http://english305.savanna.knight.domains',
  'http://engl305.taylor.knight.domains',
  'http://taylorjadin.taylor.knight.domains',
  'http://english305.taylor.knight.domains',
  'http://abbierose.knight.domains',
  'http://allison.knight.domains',
  'http://allyson.knight.domains',
  'http://alukens.knight.domains',
  'http://alyssa.knight.domains',
  'http://amhart.knight.domains',
  'http://angelesjimenez.knight.domains',
  'http://anneoleniczak.knight.domains',
  'http://annicka.knight.domains',
  'http://annikaneerdaels.knight.domains',
  'http://audreyshreiner.knight.domains',
  'http://austinwalls.knight.domains',
  'http://baovan.knight.domains',
  'http://bensplayground.knight.domains',
  'http://bradford.knight.domains',
  'http://brenthatfield.knight.domains',
  'http://briannabraegerart.knight.domains',
  'http://bvb.knight.domains',
  'http://careers.knight.domains',
  'http://carolyne-roepke.knight.domains',
  'http://cheneeblock.knight.domains',
  'http://corday.knight.domains',
  'http://danmartinucci.knight.domains',
  'http://demo.knight.domains',
  'http://devinmorrisroe.knight.domains',
  'http://dhunnicutt.knight.domains',
  'http://diazrenzo.knight.domains',
  'http://elynorgregorich.knight.domains',
  'http://ericademonstration.knight.domains',
  'http://erikagelhausen.knight.domains',
  'http://fullspectrumlearning.knight.domains',
  'http://gateway.knight.domains',
  'http://goglobal.knight.domains',
  'http://gracebeno.knight.domains',
  'http://hbuczek.knight.domains',
  'http://jacoblaubacher.knight.domains',
  'http://jaredwiesman.knight.domains',
  'http://jarodglander.knight.domains',
  'http://jasmine-babineaux.knight.domains',
  'http://jessicahorton.knight.domains',
  'http://john.knight.domains',
  'http://johnhewitt.knight.domains',
  'http://johnwierzba.knight.domains',
  'http://jonnivanrite.knight.domains',
  'http://josh.knight.domains',
  'http://karensuarez.knight.domains',
  'http://kasey.knight.domains',
  'http://kayla-mitchell.knight.domains',
  'http://krissylukens.knight.domains',
  'http://kyra.knight.domains',
  'http://kyrakronberg.knight.domains',
  'http://laubaysd.knight.domains',
  'http://lauren.knight.domains',
  'http://lex.knight.domains',
  'http://lindseymn.knight.domains',
  'http://maddiewaise.knight.domains',
  'http://madeline.knight.domains',
  'http://madelinechristel.knight.domains',
  'http://madelynglosny.knight.domains',
  'http://malloryshefchik.knight.domains',
  'http://marissa.knight.domains',
  'http://mark.knight.domains',
  'http://marybethkoss.knight.domains',
  'http://mattbattaglia.knight.domains',
  'http://maverick.knight.domains',
  'http://mayaschwamlien.knight.domains',
  'http://mcinar.knight.domains',
  'http://meghanlambgraphicdesign.knight.domains',
  'http://michaelrosewall.knight.domains',
  'http://namauro.knight.domains',
  'http://natalieolson.knight.domains',
  'http://nathanbudde.knight.domains',
  'http://nigl.knight.domains',
  'http://niudiva.knight.domains',
  'http://norbyknight.com',
  'http://notyouraveragejulia.knight.domains',
  'http://oliviasmidel.knight.domains',
  'http://paigewortman.knight.domains',
  'http://paulj.knight.domains',
  'http://peytonaria.knight.domains',
  'http://pkramper.knight.domains',
  'http://rebecka.knight.domains',
  'http://ronaldomoran.knight.domains',
  'http://saradegroot.knight.domains',
  'http://sarahp.knight.domains',
  'http://savannafrisque.knight.domains',
  'http://shielamaeholder.knight.domains',
  'http://spencertalbot.knight.domains',
  'http://sprague.knight.domains',
  'http://sydneynetko.knight.domains',
  'http://sydneyzima.knight.domains',
  'http://thirdbornmarlow.knight.domains',
  'http://vinci.knight.domains',
  'http://willgolubeff.knight.domains',
  'http://willsart.knight.domains'
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
  }
}

getScreenshots(urls, parallel)