import { createInterface } from "readline";
import { WebScrapper } from './core/scrapper';
const scrapper = new WebScrapper();
scrapper.init().then(() => {
    console.log('\n##### Scrapper started ######\n');
    extractFrom(scrapper);
})
    .catch(err => { throw new Error(err); });
function extractFrom(scrapper) {
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
                    return extractFrom(scrapper);
                }
                console.log('\nBYE BYE :) !!!');
                return;
            });
        });
    });
}
