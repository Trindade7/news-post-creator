import { getJsonFileData, saveToJsonFile } from '../core/store-data';
class NewsPost {
    constructor(headlines = [], posts = [], jsonPath = './dist/data/news.json') {
        this.headlines = headlines;
        this.posts = posts;
        this.jsonPath = jsonPath;
    }
    emptyPost(quantity = 5) {
        const newsPost = {};
        [...Array(quantity).keys()].forEach(e => newsPost[e] = '');
        return newsPost;
    }
    addPost(post) {
        this.posts.push(post);
    }
    removePost(index) {
        return this.posts.splice(index, 1)[0];
    }
    readFromFile() {
        const data = getJsonFileData(this.jsonPath);
        NewsPost.fromJson(data);
        return this.posts;
    }
    writeToFile() {
        try {
            saveToJsonFile(NewsPost.toJson(this.posts), this.jsonPath);
        }
        catch (err) {
            console.log(err);
        }
    }
    static fromJson(jsonData) {
        try {
            return JSON.parse(jsonData);
        }
        catch (err) {
            console.log(err);
        }
    }
    static toJson(data) {
        return JSON.stringify(data);
    }
}
