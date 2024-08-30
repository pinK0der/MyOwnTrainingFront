const audio = document.getElementById('audio');
const playButton = document.getElementById('playButton');

const progress = document.querySelector('.progress');

audio.addEventListener('timeupdate', updateProgress);

function updateProgress() {
    const { duration, currentTime } = audio;
    if (duration > 0) {
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
    }
}

let playing = false;

function togglePlay()
{
    if (playing)
    {
        audio.pause();
    }
    else
    {
        audio.play();
    }
    playing = !playing;
}