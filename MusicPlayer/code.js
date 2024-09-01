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

////////////

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const songName = document.querySelector('.songName');
//const cover = document.getElementById('cover');
const trackList = document.getElementById('trackList');
const tracks = trackList.getElementsByTagName('li');

let currentTrackIndex = 0;

const updateTrack = (index) => {
    const track = tracks[index];
    const trackName = track.textContent; // Отримуємо назву треку з текстового вмісту <li>
    const trackSrc = track.getAttribute('data-src');
    //const trackCover = track.getAttribute('data-cover');

    console.log(trackName);

    // Оновлюємо атрибути елемента <audio>, обкладинку та назву треку
    audio.src = trackSrc;
    //cover.src = trackCover;
    songName.textContent = trackName; // Оновлюємо текст у .songName
    audio.play(); // Починаємо відтворення

    console.log(songName.textContent);

    // Оновлюємо іконку кнопки відтворення
    document.getElementById('playIcon').src = 'img/continue.png';
};

updateTrack(currentTrackIndex);

function nextSong()
{
    if(currentTrackIndex === 2)
    {
        currentTrackIndex = 0;
    }
    else
    {
        currentTrackIndex++;
    }

    updateTrack(currentTrackIndex);
}

function prevSong()
{
    if(currentTrackIndex === 0)
    {
        currentTrackIndex = 2;
    }
    else
    {
        currentTrackIndex--;
    }
    updateTrack(currentTrackIndex);
}