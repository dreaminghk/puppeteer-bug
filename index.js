import puppeteer from 'puppeteer';
// Or import puppeteer from 'puppeteer-core';


console.log("star launch");
// Launch the browser and open a new blank page
const browser = await puppeteer.launch();

console.log("start new page");
const page = await browser.newPage();

console.log("start goto");
// Navigate the page to a URL.
await page.goto('https://www.tradingview.com/symbols/NASDAQ-NVDA/');


console.log("start close");
await browser.close();
console.log("close");