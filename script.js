// Lista de canciones con sus URLs y nombres
const songs = [
  { title: "Canción 1", url: "R.I.O. - Shine On (Official Video HD).mp3", image: "https://via.placeholder.com/300?text=Song1" },
  { title: "Canción 2", url: "https://raw.githubusercontent.com/usuario/repositorio/main/song2.mp3", image: "https://via.placeholder.com/300?text=Song2" },
  { title: "Canción 3", url: "https://raw.githubusercontent.com/usuario/repositorio/main/song3.mp3", image: "https://via.placeholder.com/300?text=Song3" },
  { title: "Canción 4", url: "https://raw.githubusercontent.com/usuario/repositorio/main/song4.mp3", image: "https://via.placeholder.com/300?text=Song4" },
  { title: "Canción 5", url: "https://raw.githubusercontent.com/usuario/repositorio/main/song5.mp3", image: "https://via.placeholder.com/300?text=Song5" },
  { title: "Canción 6", url: "https://raw.githubusercontent.com/usuario/repositorio/main/song6.mp3", image: "https://via.placeholder.com/300?text=Song6" },
  { title: "Canción 7", url: "https://raw.githubusercontent.com/usuario/repositorio/main/song7.mp3", image: "https://via.placeholder.com/300?text=Song7" },
  { title: "Canción 8", url: "https://raw.githubusercontent.com/usuario/repositorio/main/song8.mp3", image: "https://via.placeholder.com/300?text=Song8" }
];

// Elementos del DOM
const audioPlayer = document.getElementById("audio-player");
const playPauseButton = document.getElementById("play-pause");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const songList = document.getElementById("song-list");
const songTitle = document.getElementById("song-title");
const albumArt = document.getElementById("album-art");

let currentSongIndex = 0;

// Reproducir canción
function playSong(index) {
  const song = songs[index];
  audioPlayer.src = song.url;
  songTitle.textContent = song.title;
  albumArt.src = song.image;
  audioPlayer.play();
  playPauseButton.textContent = "Pausar";
}

// Cambiar estado del botón de Play/Pause
playPauseButton.addEventListener("click", () => {
  if (audioPlayer.paused) {
    playSong(currentSongIndex);
  } else {
    audioPlayer.pause();
    playPauseButton.textContent = "Reproducir";
  }
});

// Botón anterior
prevButton.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  playSong(currentSongIndex);
});

// Botón siguiente
nextButton.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  playSong(currentSongIndex);
});

// Crear lista de canciones
songs.forEach((song, index) => {
  const li = document.createElement("li");
  li.textContent = song.title;
  li.addEventListener("click", () => {
    currentSongIndex = index;
    playSong(currentSongIndex);
  });
  songList.appendChild(li);
});

// Iniciar con la primera canción
playSong(currentSongIndex);

