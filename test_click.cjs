const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

    await page.goto('http://localhost:8081/');
    await page.waitForSelector('a[href="/services/recruitment-process-outsourcing"]');
    await page.click('a[href="/services/recruitment-process-outsourcing"]');
    await new Promise(r => setTimeout(r, 2000));
    
    console.log("Current URL:", page.url());
    await browser.close();
  } catch (err) {
    console.error("SCRIPT ERROR:", err);
  }
})();
