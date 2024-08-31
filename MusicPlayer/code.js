const audio = document.getElementById('audio');
const progress = document.querySelector('.progress');

audio.addEventListener('timeupdate', updateProgress);

function updateProgress() {
    const { duration, currentTime } = audio;
    if (duration > 0) {
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
    }
}

function togglePlay() {
    const playIcon = document.getElementById('playIcon');

    if (audio.paused) {
        audio.play(); // Почати відтворення аудіо
        playIcon.src = 'img/continue.png'; // Змінити іконку на паузу
    } else {
        audio.pause(); // Поставити аудіо на паузу
        playIcon.src = 'img/pause.png'; // Змінити іконку на відтворення
    }
}

const volumeSlider = document.getElementById('volumeSlider');
audio.volume = volumeSlider.value / 100;

volumeSlider.addEventListener('input', function () {
    const volume = volumeSlider.value / 100;
    audio.volume = volume;
});

const progressContainer = document.getElementById("progressContainer");
const progressChanging = document.getElementById("progress");

audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);

function updateProgress()
{
    const duration = audio.duration;
    const currentTime = audio.currentTime;
    const progressPercent = (currentTime / duration) * 100;
    progressChanging.style.width = `${progressPercent}%`;
}

function setProgress(e)
{
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}