const animeJs = require('../index.js')
const anime = new animeJs.Client()

anime.wallpaper().then((res)=>{
	console.log(res)
})