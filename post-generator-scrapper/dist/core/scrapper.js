var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import puppeteer from 'puppeteer';
export class WebScrapper {
    constructor() {
        this._puppeteer = puppeteer;
        this._url = 'http://localhost:3000';
    }
    scrapText(selector = 'a', url) {
        return __awaiter(this, void 0, void 0, function* () {
            let textList = [];
            if (this._page.isClosed() || url !== this._url) {
                this._url = url !== null && url !== void 0 ? url : this._url;
                console.log('opening url...\n');
                yield this._page.goto(this._url, { waitUntil: 'networkidle2' });
            }
            try {
                console.log('getting textList...\n');
                textList = yield this._page.$$eval(selector, (elements) => {
                    return elements.map(e => e.innerText)
                        .filter((e) => e.trim().length > 0); //get element text, remove empty strings
                });
                console.log('returning textList...\n');
            }
            catch (err) {
                console.log('ERROR getting textList...\n');
                return err;
            }
            return textList;
        });
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this._browser = yield this._puppeteer.launch();
                this._page = yield this._browser.newPage();
            }
            catch (err) {
                return err;
            }
        });
    }
    ;
    /**
     *
     *
     * Closes the browser instance
     *
     *  Call this once you're done scrapping.
     */
    end() {
        return __awaiter(this, void 0, void 0, function* () {
            this._browser.close();
        });
    }
}
