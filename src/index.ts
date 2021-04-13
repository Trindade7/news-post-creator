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
function extractFrom(): void {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Selector (a) > ', (sel: string) => {
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

const server = createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  console.log(req);

  try {
    const textList = await scrapper.scrapText('a');
    res.end(JSON.stringify(textList));
  } catch (err) {
    res.end(err);
  }
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});