let audio = document.getElementById("audio");
let play = document.getElementById("play");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let progress = document.getElementById("progress");
let songName = document.getElementById("song-name");

let cards = document.querySelectorAll(".card-img");

let songs = [];
let currentSong = 0;

// songs collect
cards.forEach((img,index)=>{

let song = img.getAttribute("data-song");
let title = img.getAttribute("data-title");

if(song){
songs.push({song,title});
}

img.addEventListener("click",()=>{

audio.src = song;
songName.innerText = title;
currentSong = index;

audio.play();
play.innerText="⏸";

});

});

// play pause
play.onclick = function(){

if(audio.paused){
audio.play();
play.innerText="⏸";
}else{
audio.pause();
play.innerText="▶";
}

}

// next song
next.onclick = function(){

currentSong++;

if(currentSong >= songs.length){
currentSong = 0;
}

audio.src = songs[currentSong].song;
songName.innerText = songs[currentSong].title;

audio.play();
play.innerText="⏸";

}

// previous song
prev.onclick = function(){

currentSong--;

if(currentSong < 0){
currentSong = songs.length-1;
}

audio.src = songs[currentSong].song;
songName.innerText = songs[currentSong].title;

audio.play();
play.innerText="⏸";

}

// progress bar update
audio.ontimeupdate = function(){

if(audio.duration){
progress.value = (audio.currentTime / audio.duration)*100;
}

}

// seek song
progress.oninput = function(){

if(audio.duration){
audio.currentTime = (progress.value/100)*audio.duration;
}

}