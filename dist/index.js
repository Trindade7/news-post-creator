var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// import { previewData } from './preview-data.js';
import { WebScrapper } from './core/scrapper.js';
import { createInterface } from "readline";
import { createServer } from "http";
const scrapper = new WebScrapper();
scrapper.init().then(() => {
    console.log('\n##### Scrapper started ######\n');
    // extractFrom();
})
    .catch(err => { throw new Error(err); });
/**
 *
 * For test purposes
 *
 */
function extractFrom() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Selector (a) > ', (sel) => {
        const selector = sel.length ? sel : 'a';
        console.log(`\nLooking for tenxt in ${selector}n\n`);
        scrapper.scrapText(selector)
            .then(res => {
            console.log(res);
            // previewData(res);
        })
            .catch(err => console.log({ err }))
            .finally(() => {
            rl.question('\nRetry (y)? > ', (answer = "y") => {
                rl.close();
                if (answer === "y" || answer === "") {
                    console.log('retrying\n');
                    return extractFrom();
                }
                console.log('\nBYE BYE :) !!!');
                return;
            });
        });
    });
}
//////////////////////
const hostname = '127.0.0.1';
const port = 5000;
const server = createServer((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    console.log(req);
    try {
        const textList = yield scrapper.scrapText('a');
        res.end(JSON.stringify(textList));
    }
    catch (err) {
        res.end(err);
    }
}));
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
