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

// Song titles and their corresponding audio and image sources
const songs = [
    {
        title: 'Deejay Snny-Quick Session 1',
        audioSrc: 'Assets/Deejay Snny-Quick Session 1.mp3',
        imageSrc: 'Assets/img/dj snny variant 4.png'
    },
    {
        title: 'Medley sensation 1',
        audioSrc: 'Assets/Medley sensation 1.mp3',
        imageSrc: 'Assets/img/dj snny variant 3.png'
    }
];

// Current song index
let songIndex = 0;

// Initially load song info to the DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
    title.innerText = song.title;
    audio.src = song.audioSrc;
    cover.src = song.imageSrc;
}

// Play the song
function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i').classList.remove('fa-play');
    playBtn.querySelector('i').classList.add('fa-pause');
    audio.play();
}

// Pause the song
function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i').classList.add('fa-play');
    playBtn.querySelector('i').classList.remove('fa-pause');
    audio.pause();
}

// Event listener for play/pause button
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

// Function to increase volume
function increaseVolume() {
    if (audio.volume < 1) {
        audio.volume += 0.1;
    }
}

// Function to decrease volume
function decreaseVolume() {
    if (audio.volume > 0) {
        audio.volume -= 0.1;
    }
}

// Event listener for volume up button
volumeUpBtn.addEventListener('click', increaseVolume);

// Event listener for volume down button
volumeDownBtn.addEventListener('click', decreaseVolume);

// Event listener for next button
nextBtn.addEventListener('click', () => {
    songIndex++;
    if (songIndex >= songs.length) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
});

// Event listener for previous button
prevBtn.addEventListener('click', () => {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
});
