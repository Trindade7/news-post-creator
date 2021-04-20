import puppeteer from 'puppeteer';

export class WebScrapper {
  private readonly _puppeteer = puppeteer;
  private _url = 'http://localhost:3000';
  // private _url = 'https://coinmarketcap.com/headlines/news/';
  // private _url = 'https://cryptonews.com/';
  private _browser!: puppeteer.Browser;
  private _page!: puppeteer.Page;

  constructor () {
  }

  async scrapText(selector = 'a', url?: string): Promise<string[]> {
    let textList: string[] = [];

    if (this._page.isClosed() || url !== this._url) {
      this._url = url ?? this._url;
      console.log('opening url...\n');
      await this._page.goto(this._url, { waitUntil: 'networkidle2' });
    }

    try {
      console.log('getting textList...\n');
      textList = await this._page.$$eval<string[]>(selector, (elements: Element[]) => {
        return elements.map(e => (e as HTMLElement).innerText)
          .filter((e) => e.trim().length > 0); //get element text, remove empty strings
      });
      console.log('returning textList...\n');
    } catch (err) {
      console.log('ERROR getting textList...\n');
      return err;
    }

    return textList;
  }

  async init(): Promise<void> {
    try {
      this._browser = await this._puppeteer.launch();
      this._page = await this._browser.newPage();
    } catch (err) {
      return err;
    }
  };

  /**
   *
   *
   * Closes the browser instance
   *
   *  Call this once you're done scrapping.
   */
  async end(): Promise<void> {
    this._browser.close();
  }
}