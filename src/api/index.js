const express = require('express');
const puppeteer = require('puppeteer-extra');

const app = express();
const port = process.env.PORT || 3000;

const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

const nicheLogin = async (browser, user, pass) => {
  const page = await browser.newPage();
  await page.goto('https://www.niche.com/account/login/');
  await page.type('#loginEmail', user);
  await page.type('#loginPassword', pass);
  await page.click('button[type="submit"]');
  await page.waitForNavigation();
  await page.close();
}

app.get('/list', async (req, res) => {
  const browser = await puppeteer.launch({ headless: true, slowMo: 10 });
  await nicheLogin(browser, req.query.username, req.query.password);
  const page = await browser.newPage();
  await page.goto('https://www.niche.com/account/list/');
  const table = await page.$('table.account-entity-table tbody');
  const list = await table.evaluate(element => {

    let children = Array.from(element.children);

    return children.map(child => {
      return {
        title: child.querySelector('.entity-row__title').innerText,
        status: child.querySelector('.status-select__pill').innerText,
        url: child.querySelectorAll('.popover-item')[0].href,
        img: child.querySelector('.entityImage__figure__image').style.backgroundImage ? child.querySelector('.entityImage__figure__image').style.backgroundImage.match(/url\("(.*?)"\)/)[1] : null
      }
    });
  });

  res.send(list);
  await browser.close();
})

app.listen(port, () => {console.log(`Listening at port ${port}`)});
