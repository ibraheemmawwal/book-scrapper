const browserObject = require('./browser');
const scrapperController = require('./pageController');

// Start browser
let browserInstance = browserObject.startBrowser();

// pass browser instance to page controller
scrapperController(browserInstance);
