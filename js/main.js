const btnDarkMode = document.querySelector('.dark-mode-btn');

btnDarkMode.onclick = function () {
    console.log('onclick')
    btnDarkMode.classList.toggle("dark-mode-btn--active");
} 