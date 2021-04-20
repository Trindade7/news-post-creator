import { getJsonFileData, saveToJsonFile } from '../core/store-data';
import { NewsModel } from "./news-sources.model";
interface NewsPostModel {
  [key: string]: string;
}

class InstagramNews {
  constructor (
    public headlines: NewsModel[] = [],
    public posts: NewsPostModel[] = [],
    public jsonPath = './dist/data/news.json'
  ) { }

  emptyPost(quantity = 5): NewsPostModel {
    const newsPost: NewsPostModel = {};

    [...Array(quantity).keys()].forEach(e => newsPost[e] = '');

    return newsPost;
  }

  addPost(post: NewsPostModel): void {
    this.posts.push(post);
  }

  removePost(index: number): NewsPostModel {
    return this.posts.splice(index, 1)[0];
  }

  readFromFile() {
    const data = getJsonFileData(this.jsonPath);
    InstagramNews.fromJson(data);

    return this.posts;
  }

  writeToFile() {
    try {
      saveToJsonFile(InstagramNews.toJson(this.posts), this.jsonPath);
    } catch (err) {
      console.log(err);
    }
  }

  static fromJson(jsonData: string): NewsPostModel | undefined {
    try {
      return JSON.parse(jsonData) as NewsPostModel;
    } catch (err) {
      console.log(err);
    }
  }

  static toJson(data: NewsPostModel[]): string {
    return JSON.stringify(data);
  }
}