const pageScrapper = require('./pageScrapper');
const fs = require('fs');

async function scrapeAll(browserInstance) {
  let browser;
  try {
    browser = await browserInstance;

    // await pageScrapper.scraper(browser);

    let scrapedData = {};
    // Call the scraper for different set of books to be scraped

    scrapedData['Travel'] = await pageScrapper.scraper(browser, 'Travel');
    scrapedData['Historical Fiction'] = await pageScrapper.scraper(
      browser,
      'Historical Fiction'
    );
    scrapedData['Mystery'] = await pageScrapper.scraper(browser, 'Mystery');

    await browser.close();
    fs.writeFile(
      'data.json',
      JSON.stringify(scrapedData),
      'utf-8',
      function (err) {
        if (err) {
          console.log(err);
        }
        console.log(
          "The data has been scraped and saved successfully! View it at './data.json'"
        );
      }
    );

    console.log(scrapedData);
  } catch (error) {
    console.log('Error starting browser: ', error);
  }
}

module.exports = (browserInstance) => scrapeAll(browserInstance);
