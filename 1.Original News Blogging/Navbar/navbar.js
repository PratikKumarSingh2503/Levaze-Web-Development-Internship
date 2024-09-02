const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        darkModeToggle.firstElementChild.style.display = 'none';
        darkModeToggle.lastElementChild.style.display = 'block';
    } else {
        darkModeToggle.firstElementChild.style.display = 'block';
        darkModeToggle.lastElementChild.style.display = 'none';
    }
});