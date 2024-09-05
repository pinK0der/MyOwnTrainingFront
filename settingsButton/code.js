const settingsButton = document.getElementById('settings-button');
const settingsMenu = document.getElementById('settings-menu');

settingsButton.addEventListener('click', () => {
  settingsMenu.classList.toggle('visible');
  settingsMenu.classList.toggle('hidden');
});


document.addEventListener('click', (event) => {
  if (!settingsButton.contains(event.target) && !settingsMenu.contains(event.target)) {
    settingsMenu.classList.add('hidden');
    settingsMenu.classList.remove('visible');
  }
});
