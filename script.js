const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'

// Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_love_it_heart_dxlp_${color}.svg`;
    image2.src = `img/undraw_favourite_item_pcyo_${color}.svg`;
    image3.src = `img/undraw_beach_day_cser_${color}.svg`;
}

//
function toggleLightDarkMode(isDark){
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode': 'Light Mode';
    if(isDark){
        toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
        imageMode(DARK_THEME);
    }
    else{
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
        imageMode(LIGHT_THEME);
    }
}

// Switch Theme Dynamically
function switchTheme(event) {
    //this return the true/false from toggle
    if (event.target.checked) {
        //key , value
        document.documentElement.setAttribute('data-theme', DARK_THEME);
        localStorage.setItem('theme', DARK_THEME);
        toggleLightDarkMode(true);
    }
    //light mode
    else{
        document.documentElement.setAttribute('data-theme', LIGHT_THEME);
        localStorage.setItem('theme', LIGHT_THEME);
        lightMode();
        toggleLightDarkMode(false);
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === DARK_THEME) {
        toggleSwitch.checked = true;
        toggleLightDarkMode(true);
      }
}