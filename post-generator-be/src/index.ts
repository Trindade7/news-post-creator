import { json } from 'express';
import express from "express";

const app = express();
var router = express.Router();
const port = 3300;

app.use(express.json());
app.use(express.static('public'));

app.get('/headlines/', (req, res) => {
  res.send('Hello from expressdd');
});

app.get('/template/', (req, res) => {

  // res.redirect(`/template/hiff182.html`);
  res.send(`/${req.params['id']} here`);
});

app.get('/post/:id', (req, res) => {
  res.send('Hello from express');
});

app.listen(port, () => {
  console.log(`Scrapper app listening on http://localhost:${port}/`);

});
