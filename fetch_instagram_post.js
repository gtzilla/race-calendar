import { instagram } from 'instagram-scraper-api';
// import ig from 'instagram-scraping'
// import Insta from 'scraper-instagram';
import { Command } from 'commander';


const program = new Command();
program
  .version('0.0.2')
  .usage('./npx node fetch_instragram_post.js -u "https://www.instagram.com/p/CWH6NmyMAtT/"')
  .option('-s, --session-id <session_id>', 'Instagram WEB Cookie sessionid', null)
  .option('-u, --url <instagram_url>', 'An Instagram Post', null);
program.parse(process.argv);




instagram
  .user('willsmith')
  .then((user) => console.log(user))
  .catch((err) => console.error(err));

// const InstaClient = new Insta();
// const shortcode = 'CWH6NmyMAtT';

// (async ()=>{
//   await InstaClient.authBySessionId('264631377%3ADyfQehWA7z76ZZ%3A3')
//             .then(account => {
//               console.log(account)
//             })
//             .catch(err => console.error(err))
//   await InstaClient.fullPost(shortcode)
//             .then(post => console.log(post))
//             .catch(err => console.error(err));  
// })();
            


// break up the url


// import cheerio from 'cheerio'
// import got from 'got';
// import _ from 'underscore';


// const program = new Command();
// program
//   .version('0.0.2')
//   .usage('./npx node fetch_instragram_post.js -u "https://www.instagram.com/p/CWH6NmyMAtT/"')
//   .option('-u, --url <instagram_url>', 'An Instagram Post', null);
// program.parse(process.argv);


// const options = program.opts();
// console.log("Will download url", options.url)

// /*
//   parse the JSON blob out of the script tag
//   little brittle, but sheering off the ; and whatever={...}
// */
// function transformStringToJson(str) {
//   const pos = str.indexOf('{');
//   const onlyJson = str.substring(pos);
//   const posSemiColon = onlyJson.lastIndexOf('};');
//   const finalJson = onlyJson.substring(0, posSemiColon+1)
//   try {
//     return JSON.parse(finalJson);
//   } catch(err) {
//     console.error('unable to parse JSON', err)
//     process.exit(1);
//   }  
// }


// got(options.url, {
//   headers: {
//     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
//   }
// }).then(response => {
//   const $ = cheerio.load(response.body);
//   const scriptTags = $('script');
//   const filtered = _.chain(scriptTags).filter(tag=>{
//     const attr = tag.attribs;
//     return !_.has(attr, 'src');
//   }).filter(tag=>{
//     const scriptTextStr = $(tag).contents().first().text();
//     return scriptTextStr.startsWith('window._sharedData')
//   }).map(tag=>{
//     return $(tag).contents().first().text()
//   }).first().value()
  
//   // const pos = filtered.indexOf('{');
//   // const onlyJson = filtered.substring(pos);
//   // const posSemiColon = onlyJson.lastIndexOf('};');
//   // const finalJson = onlyJson.substring(0, posSemiColon+1)
//   let jsonData = transformStringToJson(filtered) || null;
//   console.log("WARN -- STUCK. instagram isn't sending what I need via HTTP")

//   console.log("jsonData", jsonData && jsonData.entry_data);
// }).catch(err => {
//   console.log(err);
// });


