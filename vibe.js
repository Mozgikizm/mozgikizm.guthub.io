document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const button = document.getElementById('lol');

  
    button.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            button.textContent = 'pause';
        } else {
            audio.pause();
            button.textContent = 'for vibe';
        }
    });
});
