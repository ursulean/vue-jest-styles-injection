import puppeteer from 'puppeteer';

declare global {
  var __BROWSER_GLOBAL__: puppeteer.Browser;
}
