// Get DOM elements
const greeting = document.querySelector('.greeting');
const quoteType = document.querySelector('.js-quote');
const quoteOptions = document.querySelector('option');
const quote = document.querySelector('.quote');
const author = document.querySelector('.autor');
const toggleBtn = document.querySelector('.checkbox');
const toggle = document.querySelector('.toggle')
const modalForm = document.querySelector('.modal');
const modalBtn = document.querySelector('button');
const username = document.querySelector('#username');
const app = document.querySelector('.container');


// toggle button (light mode & dark mode) code
let mode = 'light';
quoteType.style.backgroundColor = '#000';
quoteType.style.color = '#fff';
toggleBtn.addEventListener('change', () => {
    /* Switching from light mode to dark mode and vice versa
    if the mode is light switch the colours then change the mode value to dark
    do vice versa if the mode is dark */
    if (mode === 'light') {
        darkMode();
        mode = 'dark';
        localStorage.setItem('mode', mode);
    } else if (mode === 'dark') {
        lightmode();
        mode = 'light';
        localStorage.setItem('mode', mode);
    }
})

    
// toggle mode from local storage checks if the mode is light or dark
let savedMode = localStorage.getItem('mode');
if (savedMode === 'dark') {
    darkMode();
} else if (savedMode === 'light') {
    lightmode();
}


// modal code
modalBtn.addEventListener('click', (e) => {
    if (e.key === 'Enter') {
        setUsername()
    } else {
        setUsername()
    }
    e.preventDefault();
});

let user = localStorage.getItem('username');


// refactored mode code
function setUsername() {
    localStorage.setItem('username', username.value)
    modalForm.style.display = 'none'
    app.style.display = 'flex'
    greeting.textContent = `Welcome ${username.value}`
}

if (localStorage.getItem('username')) {
    modalForm.style.display = 'none';
    app.style.display = 'flex';
    greeting.textContent = `Welcome ${user}`
}


//stored the mode code inside fuctions for readability
function lightmode() {
    quoteType.style.color = '#fff'
    quoteType.style.backgroundColor = '#000'
    document.body.style.transition = 'ease-in 1'
    document.body.style.color = '#000'
    document.body.style.backgroundColor = '#fff'
}

function darkMode() {
    quoteType.style.color = '#000';
    quoteType.style.backgroundColor = '#fff';
    document.body.style.transition = 'ease-in 0.7s';
    document.body.style.color = '#fff';
    document.body.style.backgroundColor = '#000';
}