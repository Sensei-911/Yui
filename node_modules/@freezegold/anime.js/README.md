s<h1 align="center">Welcome to anime.js 👋</h1>
<p align="center">
  <img src="https://img.shields.io/npm/v/@freezegold/anime.js?orange=blue" />
  <a href="https://www.npmjs.com/package/@freezegold/anime.js">
    <img alt="downloads" src="https://img.shields.io/npm/dm/@freezegold/anime.js.svg?color=blue" target="_blank" />
  </a>
  <a href="https://github.com/freezegr/insta.js/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg" target="_blank" />
  </a>
  <a href="https://github.com/freezegr/gitmoji-changelog">
    <img src="https://img.shields.io/badge/changelog-gitmoji-brightgreen.svg" alt="gitmoji-changelog">
  </a>
</p>

## Instaletion 

`npm i @freezegole/anime.js --save`

## example

```js
const animeJs = require('@freezegold/anime.js');
const anime = new animeJs.Client()

anime.searchAnime('attack on titan').then(res => {
	console.log(res);
});

anime.searchManga('attack on titan').then(res => {
	console.log(res);
});

anime.searchHonorifics('san').then(res => {
	console.log(res)
});

anime.nameHonorifics(freezegr,  "san").then(res => {
	console.log(res)
});

anime.meme().then(res => {
	console.log(res)
});

anime.nsfw('anal').then(res=> {
	console.log(res)
})

anime.sfw('kiss').then(res=> {
	console.log(res)
})

// all nsfw and all sfw => console.log(anime.nfswAll) / console.log(anime.sfwAll)

anime.wallpaper.thne(res=>{
	console.log(res)
})
console.log(anime.honorifics)
```