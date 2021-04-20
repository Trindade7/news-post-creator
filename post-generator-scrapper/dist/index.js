import express from "express";
const app = express();
var router = express.Router();
const port = 3300;
app.use(express.json());
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.redirect('/index.html');
    res.send('Hello from express');
});
app.get('/headlines/', (req, res) => {
    res.send('Hello from expressdd');
});
app.get('/template/:id', (req, res) => {
    res.send('Hello from express');
});
app.get('/post/:id', (req, res) => {
    res.send('Hello from express');
});
app.listen(port, () => {
    console.log(`Scrapper app listening on localhost:${port}`);
});
