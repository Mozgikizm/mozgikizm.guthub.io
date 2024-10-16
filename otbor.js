const audio = document.getElementById('audio');
const playButton = document.getElementById('play-button');

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = 'Вырубить';
    } else {
        audio.pause();
        playButton.textContent = 'Врубить';
    }
});
