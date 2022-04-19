const puppeteer = require('puppeteer')

let browser = null;
let page = null;
let random = Math.floor((Math.random() * 100) + 50);

(async () => {

    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();

    //Change to "defaultViewport: null" for default size
    page.setViewport({
        width: 1366,
        height: 1000,
        isMobile: false

    });

    // Visiting a Webpage
    await page.goto('https://www.youtube.com', {waitUntil: 'networkidle2'});

    // Clicking -> Typing -> Pressing (via XPath)
    await page.waitForTimeout(5000);
    const elements = await page.$x('//*[@id="search-input"]');
    await elements[0].click();
    console.log("Clicked");

    await page.waitForTimeout(1000);
    console.log("Typing...");
    await elements[0].type("YOUR TEXT GOES HERE", {delay: random});

    await page.waitForTimeout(1000);
    await page.keyboard.press('Enter');
    console.log("Pressed");

    //FullPage Screenshot
    await page.waitForTimeout(2000);
    await page.screenshot({path: 'filename.png', fullPage: true});
    console.log("Screenshotted");

    //Screenshot (via Selector)
    await page.waitForTimeout(2000);
    await page.waitForSelector('#logo-icon');
    const selector = await page.$('#logo-icon');
    await selector.screenshot({path: 'filename2.png'});
    console.log("Screenshotted");

    //Right Click
    await page.waitForTimeout(2000);
    await page.mouse.click(500, 500, {delay: random, button: 'right'});
    console.log('Right Clicked')

    //Close Browser
    await page.waitForTimeout(2000);
    console.log('Browser Closing...')
    setTimeout(async() => {await browser.close();}, 1000);
    setTimeout(() => {console.log("Browser Closed");}, 1500);

})();
