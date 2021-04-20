import { WebScrapper } from './core/scrapper.js';
import { createServer } from "http";
import { URL } from "url";

const scrapper = new WebScrapper();
scrapper.init().then(() => {
  console.log('\n##### Scrapper started ######\n');
}).catch(err => console.log('scrapper init error', { err }));

export const hostname = '127.0.0.1';
const port = 5000;

const server = createServer(async (req, res) => {
  let textList = [];

  switch (req.url) {
    case '/coinbase':
      textList = await scrapper.scrapText('a', 'https://coinmarketcap.com/headlines/news/');
      break;

    case '/cryptonews':
      textList = await scrapper.scrapText('a', 'https://cryptonews.com/');
      break;

    case '/local':
      textList = await scrapper.scrapText('a', 'http://localhost:3000');
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
  textList = await scrapper.scrapText('a');

  res.end(JSON.stringify(textList));
});

function router(url: string) {

}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});