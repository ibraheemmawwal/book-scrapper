const puppeteer = require('puppeteer');

async function startBrowser() {
  let browser;
  try {
    console.log('Starting browser...');
    browser = await puppeteer.launch({
      headless: false,
      args: ['--disable-setuid-sandbox'],
      ignoreHTTPSErrors: true,
    });
  } catch (error) {
    console.log('Error starting browser: ', error);
  }
  return browser;
}

module.exports = {
  startBrowser,
};
