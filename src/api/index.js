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

app.get('/data', async (req, res) => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 10 });
  await nicheLogin(browser, req.query.username, req.query.password);
  const page = await browser.newPage();
  await page.goto('https://www.niche.com/account/list/');
  const schools = await page.$$('table.account-entity-table tbody tr');
  for (school of schools) {

    let link = await school.$$eval('a.popover-item', nodes => nodes.find(el => el.innerText == 'View Profile').href);
    const page = await browser.newPage();

    await Promise.all([
      page.goto(link),
      page.waitForNavigation()
    ])

    const data = await page.evaluate(() => {

        return {
          title: document.querySelector('.postcard__title')?.innerText, // string
          url: '', // url (niche link)
          img: document.querySelector('.postcard__figure__image style')?.innerHTML.match(/url\((.*?)\)/)[1], // url
          link: document.querySelector('.profile__website__link')?.href, // url (school site)
          grade: document.querySelector('section#report-card .overall-grade__niche-grade .niche__grade')?.childNodes[1].data, // letter grade
          report: Object.fromEntries(Array.from(document.querySelectorAll('section#report-card .report-card .profile-grade--two'))?.map(grade => [grade.children[0].innerText, grade.children[1].childNodes[1].data])), // letter grades object
          address: document.querySelector('address')?.innerText, // address string
          acceptance: document.querySelector('section#admissions .profile__bucket--1 .scalar__value')?.innerText, // percentage string
          sat: Array.from(document.querySelectorAll('section#admissions .scalar--three')).find(el => el.querySelector('.scalar__label span')?.innerText == 'SAT Range')?.querySelector('.scalar__value span')?.innerText,
          act: Array.from(document.querySelectorAll('section#admissions .scalar--three')).find(el => el.querySelector('.scalar__label span')?.innerText == 'ACT Range')?.querySelector('.scalar__value span')?.innerText, // number range
          scatterplot: document.querySelector('section#scatterplot .scatterplot-chart__canvas')?.toDataURL(), // base64 image
          rank: document.querySelector('section#scatterplot .scatterplot__percentile-message .scatterplot__percentile-text em')?.innerText, // percentage string
          cost: document.querySelector('section#cost .scalar .scalar__value span')?.innerText, // price string
          majors: Array.from(document.querySelectorAll('section#majors .popular-entities-list-item'))?.map(el => {
            return {
              title: el.querySelector('.popular-entity__name').innerText,
              grads: el.querySelector('.popular-entity-descriptor').innerText
            }
          }), // object array
          population: document.querySelector('section#cost .scalar .scalar__value span')?.innerText, // number string
          oneWord_student: {
            responses: document.querySelector('section#students .poll__table__tagline .poll__table__count')?.innerHTML.split('-->')[1],
            words: Array.from(document.querySelectorAll('section#students .poll__table__results .poll__table__result__item'))?.map(el => {
              return {
                word: el.querySelector('.poll__table__result__label').innerText,
                percentage: el.querySelector('.poll__table__result__percent').innerText
              }
            })
          },
          oneWord_school: {
            responses: document.querySelector('section#campus-life .poll__table__tagline .poll__table__count')?.innerHTML.split('-->')[1],
            words: Array.from(document.querySelectorAll('section#campus-life .poll__table__results .poll__table__result__item'))?.map(el => {
              return {
                word: el.querySelector('.poll__table__result__label').innerText,
                percentage: el.querySelector('.poll__table__result__percent').innerText
              }
            })
          },
          // greekLife: null, // percentage string
          // gradRate: null, // percentage string
          // medEarn: null, // price string
        }
      });
      data.url = link;

      res.write(JSON.stringify(data));

      await page.close();
    };

  res.end();
  await browser.close();
});

app.listen(port, () => {console.log(`Listening at port ${port}`)});
