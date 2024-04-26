const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')
const volumeUpBtn = document.querySelector('#volume-up');
const volumeDownBtn = document.querySelector('#volume-down');


// Song title
const songs = ['Deejay Snny-Quick Session 1']

//keep track of songs
let songIndex = 0

//Initially load song info DOM
loadSong(songs[songIndex])

//Update song details
function loadSong(song){
    title.innerText = song
    audio.src = `Assets/${'Deejay Snny-Quick Session 1'}.mp3`
}

function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i,fas').classList.remove('fa-play')
    playBtn.querySelector('i,fas').classList.add('fa-pause')
    audio.play()
}

function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i,fas').classList.add('fa-play')
    playBtn.querySelector('i,fas').classList.remove('fa-pause')
    audio.pause()
} 

// event listeners
playBtn.addEventListener('click', () => {
const isPlaying = musicContainer.classList.contains('play')

if(isPlaying){
    pauseSong()
}else{
    playSong()
}
})

// Function to increase volume
function increaseVolume() {
    if (audio.volume < 1) { // Check if volume is not already at maximum
        audio.volume += 0.5; // Increase volume by 0.1 (10%)
    }
}

// Function to decrease volume
function decreaseVolume() {
    if (audio.volume > 0) { // Check if volume is not already at minimum
        audio.volume -= 0.1
    }
}

// Event listener for volume up button
volumeUpBtn.addEventListener('click', increaseVolume);

// Event listener for volume down button
volumeDownBtn.addEventListener('click', decreaseVolume);