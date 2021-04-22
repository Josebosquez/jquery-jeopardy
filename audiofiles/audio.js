let audio = document.getElementById("audio");
let playPauseBTN = document.getElementById("playPauseBTN");
var count = 0;

function playPause(){
    if (count == 0){
        count = 1;
        audio.play();
        playPauseBTN.innerHTML = "&#9208;"
    }else{
        count = 0;
        audio.pause();
        playPauseBTN.innerHTML = "&#9658;"
    }
}

function stop(){
        playPause();
        audio.pause();
        audio.currentTime = 0; 
        playPauseBTN.innerHTML = "&#9658;"
}








let audio1 = document.getElementById("audio1");
let playPauseBTN1 = document.getElementById("playPauseBTN1");
var count = 0;

function playPause1(){
    if (count == 0){
        count = 1;
        audio1.play();
        playPauseBTN1.innerHTML = "&#9208;"
    }else{
        count = 0;
        audio1.pause();
        playPauseBTN1.innerHTML = "&#9658;"
    }
}

function stop1(){
        playPause1();
        audio1.pause();
        audio1.currentTime = 0; 
        playPauseBTN1.innerHTML = "&#9658;"
}