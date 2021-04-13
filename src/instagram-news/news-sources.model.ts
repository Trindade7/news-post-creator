export interface NewsSourceModel {
  id?: string;
  name: string;
  url: string;
  type: 'scrap' | 'json';
  selector?: string;

  /**
   *
   *
   * Parses data from json data sorces
   */
  parser?: (data: string) => NewsModel[];
}

export interface NewsModel {
  title: string;
  description: string;
}

export const newsSources: { [key: string]: NewsSourceModel; } = {
  coinMarket: {
    url: 'https://coinmarketcap.com/headlines/news/',
    name: 'coinMarket',
    type: 'json',
    parser: (data) => {
      const jsonData: NewsModel[] = JSON.parse(data)
        .map((e: any) => { return { title: e['meta']['title'], description: e['meta']['desctiption'] }; });

      return jsonData ?? [];
    }
  }
};
