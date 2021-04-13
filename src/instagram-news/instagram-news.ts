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
    this.fromJson(data);

    return this.posts;
  }

  writeToFile() {
    try {
      saveToJsonFile(this.toJson(), this.jsonPath);
    } catch (err) {
      console.log(err);
    }
  }

  private fromJson(jsonData: string): NewsPostModel | undefined {
    try {
      return JSON.parse(jsonData) as NewsPostModel;
    } catch (err) {
      console.log(err);
    }
  }

  private toJson(data = this.posts): string {
    return JSON.stringify(data);
  }
}