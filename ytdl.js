var ytdl = require('ytdl-core');

function downloadytvid(url){
    ytdl.getInfo(url).then(r=>{
        setTimeout(function(){openwindow(ytdl.chooseFormat(r.formats,{filter:'videoandaudio'}).url);},10)
    }).catch(e=>{setTimeout(function(){alert("An error occured while retrieving the URL!")},10)});
}