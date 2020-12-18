const fetch = require('node-fetch');
const { Anime } = require('../src/animeSearchClass.js');
const { version } = require('../package.json');
const { Manga } = require('../src/manga.js');
const { honorifics } = require('../src/db.js');
const puppy = require('random-puppy');
const { nsfw, sfw, nsfwAZ, sfwAZ} = require('./snfw.js');
const nekoURL = 'https://nekos.life/api/v2';
const userAgentTxt = `kitsu.js, a npm module for the kitsu.io API. v${version} (https://github.com/freezegr/anime.js)`
const head = {
	userAgent : userAgentTxt,
	options : {
	  headers: {
		  'User-Agent': userAgentTxt,
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json'
    }
  }
}

module.exports.searchAnime = function(search, page = 0) {
  return new Promise((resolve, reject) => {
    const searchTerm = encodeURIComponent(search);
    return fetch(`https://kitsu.io/api/edge/anime?filter[text]="${searchTerm}"&page[offset]=${page}`, head)
    .then(res => res.json())
    .then(json => resolve(json.data.map(info => new Anime(info))))
    .catch(err => reject(new Error(`Couldn't fetch the api: ${err}`)));
  })
};

module.exports.searchManga = function(search, page = 0) {
		return new Promise((resolve, reject) => {
			const searchTerm = encodeURIComponent(search);
			return fetch(`https://kitsu.io/api/edge/manga?filter[text]="${searchTerm}"&page[offset]=${page}`, head)
				.then(res => res.json())
				.then(json => resolve(json.data.map(info => new Manga(info))))
				.catch(err => reject(new Error(`Couldn't fetch the api: ${err}`)));
  });
};

const honoFunction1 = function(honori){
	function first(txt){
		return honorifics.filter(x=>x.hono == txt)
	}
  function second(txt){
    const alies = honorifics.map(x=>x.aliases)
    const to = alies.map(word => word.includes(txt))
    return to.includes(true)
  }
  function tpt(resolve, reject){
    if(first(honori).length == 0){
      if(second(honori) == true){
        var al = honorifics.map(x=>x.aliases)
        for(let i = 0; i < al.length; i++){
          if(true == al[i].includes(honori)){
            resolve(honorifics.filter(x=>x.aliases == al[i])[0])
          } 
        }
      } else {
        reject('Not found')
      }
    }else {
      resolve(honorifics.filter(x=>x.hono == honori)[0])
    }
  } 
	return new Promise(tpt)
}

module.exports.nameHonorific = function(name, hono = "san"){
  return honoFunction1(hono).then(res => {
    return `${name}-${res.hono}`
  })
}

module.exports.meme = function(){
  var memesPar = [
    "animemes",
    "MemesOfAnime",
    "animememes",
    "AnimeFunny"
 ]  
  var subreddit = memesPar[Math.floor(Math.random() * memesPar.length)];
  
  function prom(resolve, reject){
    try {
      puppy(subreddit).then(url => {
        resolve(url)
      })
    }catch(err){
      reject(new Error(`Couldn't fetch the api: ${err}`))
    }
  }
  return new Promise(prom)
}


module.exports.nekoNsfw = function(category){
	if(!category) return new Error('No category')
	function exacute(value){
		//console.log(value)
		return fetch(nekoURL+value)
		  .then(result=> result.json())
		  .then(res=> res)
	}
	async function promis(resolve, reject){
    for(let i = 0; i < Object.keys(nsfw[0]).length; i++){
      if(Object.keys(nsfw[0])[i] == category){
      	resolve(await exacute(Object.values(nsfw[0])[i]))
      }else if(i == Object.keys(nsfw[0]).length - 1){
      	reject(`I can't find ${category}`)
      } 
    }
	}
  return new Promise(promis)
}

module.exports.nekoSfw = function(category){
	if(!category) return new Error('No category')
	function exacute(value){
		//console.log(value)
		return fetch(nekoURL+value)
		  .then(result=> result.json())
		  .then(res=> res)
	}
	async function promis(resolve, reject){
    for(let i = 0; i < Object.keys(sfw[0]).length; i++){
      if(Object.keys(sfw[0])[i] == category){
      	resolve(await exacute(Object.values(sfw[0])[i]))
      }else if(i == Object.keys(sfw[0]).length - 1){
      	reject(`I can't find ${category}`)
      } 
    }
	}
  return new Promise(promis)
}


module.exports.nekoWallpaper = function(){
	function promis(resolve, reject){
    try{
		  fetch(nekoURL+sfw[0].wallpaper)
		    .then(result=>result.json())
		    .then(res=>resolve(res))
		}catch(err){
			reject(err)
		}
	}
	return new Promise(promis)
}

module.exports.nsfwAll = nsfwAZ;
module.exports.sfwAll = sfwAZ;
module.exports.honorifics = honorifics;
module.exports.honoFunction = honoFunction1;