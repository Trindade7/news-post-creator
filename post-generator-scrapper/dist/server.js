var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WebScrapper } from './core/scrapper.js';
import { createServer } from "http";
const scrapper = new WebScrapper();
scrapper.init().then(() => {
    console.log('\n##### Scrapper started ######\n');
}).catch(err => console.log('scrapper init error', { err }));
export const hostname = '127.0.0.1';
const port = 5000;
const server = createServer((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let textList = [];
    switch (req.url) {
        case '/coinbase':
            textList = yield scrapper.scrapText('a', 'https://coinmarketcap.com/headlines/news/');
            break;
        case '/cryptonews':
            textList = yield scrapper.scrapText('a', 'https://cryptonews.com/');
            break;
        case '/local':
            textList = yield scrapper.scrapText('a', 'http://localhost:3000');
            break;
        default:
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('404 nothing here');
            break;
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    console.log(req.push);
    textList = yield scrapper.scrapText('a');
    res.end(JSON.stringify(textList));
}));
function router(url) {
}
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
