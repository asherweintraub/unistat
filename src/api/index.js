const express = require('express');
const puppeteer = require('puppeteer-extra');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log('get at /index');
});

app.listen(port, () => {console.log(`Listening at port ${port}`)});
