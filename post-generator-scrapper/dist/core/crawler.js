var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { newsHeadlineSources } from "../instagram-news/headline-sources.model.js";
import puppeteer from 'puppeteer';
// async function getHeadlines(source = newsHeadlineSources['coinMarket']) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(source?.url ?? 'https://coinmarketcap.com/headlines/news/');
//   const selector = 'div.cmc-app-wrapper div.infinite-scroll-component div.uikit-order-2 >div a.cmc-link';
//   const headlines: string[] = await extractTextFromPage(page, selector);
//   browser.close();
//   return headlines;
// }
// async function extractTextFromPage(page: puppeteer.Page, selector = 'div a.cmc-link'): Promise<string[]> {
//   return await page.evaluate((sel) => {
//     const textSelectors = document.querySelectorAll(sel);
//     let textList: string[] = [];
//     let i = 0;
//     for (i = 0; i < textSelectors.length; i++) {
//       const element = textSelectors[i].textContent ?? '';
//       textList.push(element);
//     }
//     return textList;
//   }, selector);
// }
// // const puppeteer = require('puppeteer');
// async function scrapUrl(url: string) {
//   if (!url) {
//     return 'url required';
//   }
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(url, { waitUntil: 'networkidle2' });
//   const response = await page.mainFrame();
//   await browser.close();
//   // console.log(response);
//   return response.content;
// };
// function printResponse() {
//   console.log("awaiting response");
//   scrapUrl("https://www.google.com/").then(
//     val => console.log(val)
//   ).catch(err => console.log(err));
// }
// printResponse();
export class WebScrapper {
    constructor() {
        this._puppeteer = puppeteer;
        // private readonly _scrapper = scrapUrl;
        this._url = 'https://coinmarketcap.com/headlines/news/';
    }
    scrapText(selector = 'section.projects-container') {
        return __awaiter(this, void 0, void 0, function* () {
            return this._scrapUrl(this._extractTextFromPage, undefined, selector);
        });
    }
    scrapPropertyValue(selector = 'a', attribute = 'href') {
        return __awaiter(this, void 0, void 0, function* () {
            return this._scrapUrl(this._extractTagPropertyValue, undefined, selector, attribute);
        });
    }
    _extractTextFromPage(page, selector = 'div a.cmc-link') {
        return __awaiter(this, void 0, void 0, function* () {
            return yield page.evaluate((sel) => {
                var _a;
                const textSelectors = document.querySelectorAll(sel);
                let textList = [];
                let i = 0;
                let element = '';
                for (i = 0; i < textSelectors.length; i++) {
                    try {
                        element = (_a = textSelectors[i].textContent) !== null && _a !== void 0 ? _a : '';
                    }
                    catch (err) {
                        console.log(err);
                    }
                    textList.push(element);
                }
                return textList;
            }, selector);
        });
    }
    _extractTagPropertyValue(page, selector = 'div a.cmc-link', attribute) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log({ attribute }, '\n\n');
            return yield page.evaluate((sel, attribute) => {
                var _a;
                const textSelectors = document.querySelectorAll(sel);
                let textList = [];
                let i = 0;
                let element = '';
                for (i = 0; i < textSelectors.length; i++) {
                    try {
                        element = (_a = textSelectors[i].getAttribute(attribute)) !== null && _a !== void 0 ? _a : '';
                    }
                    catch (err) {
                        console.log(err);
                    }
                    textList.push(element);
                }
                return textList;
            }, selector, attribute);
        });
    }
    _scrapUrl(fn, source = newsHeadlineSources['coinMarket'], selector, ...argList) {
        return __awaiter(this, void 0, void 0, function* () {
            const browser = yield puppeteer.launch();
            const page = yield browser.newPage();
            yield page.goto('http://localhost:3000');
            const headlines = yield (() => __awaiter(this, void 0, void 0, function* () { return yield fn.apply(this, [page, selector, ...argList]); }))();
            browser.close();
            return headlines;
        });
    }
}
const scrapper = new WebScrapper();
scrapper.scrapPropertyValue()
    .then(res => res.map(e => console.log('[crawler] ', { e }, res.length)))
    .catch(err => console.log({ err }));
