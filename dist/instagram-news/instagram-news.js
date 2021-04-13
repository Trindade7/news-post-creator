import { getJsonFileData, saveToJsonFile } from '../core/store-data';
class InstagramNews {
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
        this.fromJson(data);
        return this.posts;
    }
    writeToFile() {
        try {
            saveToJsonFile(this.toJson(), this.jsonPath);
        }
        catch (err) {
            console.log(err);
        }
    }
    fromJson(jsonData) {
        try {
            return JSON.parse(jsonData);
        }
        catch (err) {
            console.log(err);
        }
    }
    toJson(data = this.posts) {
        return JSON.stringify(data);
    }
}
