// Get DOM elements
const greeting = document.querySelector('.greeting');
const quoteType = document.querySelector('.js-quote');
const quoteOptions = document.querySelector('option');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
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



let intervalId;
function getQuoteType() {
    if (quoteType.value === 'biblical') {
        clearInterval(intervalId); 
        let result = quotes.filter(quote => {
            return quote.biblical
        }).map(item => {
            return item.biblical
        })
        let i = 0
        intervalId =  setInterval(() => {
            quote.innerHTML = `${result[i].quote}<br> <span class='author'>${result[i].author}<span>`;
            i ++;
            if (i === result.length) {
                i = 0;
            }
        }, 3000);
    } else if (quoteType.value === 'quran') {
        clearInterval(intervalId); 
        let result = quotes.filter(quote => {
            return quote.quran
        }).map(item => {
            return item.quran
        })
        let i = 0
        intervalId =  setInterval(() => {
            quote.innerHTML = `${result[i].quote}<br> <span class='author'>${result[i].author}<span>`;
            i ++;
            if (i === result.length) {
                i = 0;
            }
        }, 3000);
    } else if (quoteType.value === 'phylosophical') {
        clearInterval(intervalId); 
        let result = quotes.filter(quote => {
            return quote.phylosophical
        }).map(item => {
            return item.phylosophical
        })
        let i = 0
        intervalId =  setInterval(() => {
            quote.innerHTML = `${result[i].quote}<br> <span class='author'>${result[i].author}<span>`;
            i ++;
            if (i === result.length) {
                i = 0;
            }
        }, 3000);
    }
}


quoteType.addEventListener('change', ()=>{
    getQuoteType();
})









// hard coded quotes --- would soon change when i integrate Ai to this.
const quotes = [
    {
        phylosophical: {
            quote: 'Do not pray for an easy life, pray for the strength to endure a difficult one.',
            author: '~Bruce Lee',
        }
    },
    {
        phylosophical: {
            quote: 'He who has a why to live can bear almost any how.',
            author: '~Friedrich Nietzsche',
        }
    },
    {
        phylosophical: {
            quote: 'Happiness depends upon ourselves.',
            author: '~Aristotle',
        }
    },
    {
        biblical: {
            quote: 'I can do all things through Christ who strengthens me.',
            author: '~Philippians 4:13',
        }
    },
    {
        biblical: {
            quote: 'For God has not given us a spirit of fear, but of power and of love and of a sound mind.',
            author: '~2 Timothy 1:7',
        }
    },
    {
        biblical: {
            quote: 'The Lord is my shepherd; I shall not want.',
            author: '~ Psalm 23:1',
        }
    },
    {
        quran: {
            quote: 'Indeed, with hardship comes ease.',
            author: '~ Surah Ash-Sharh (94:6)',
        }
    },
    {
        quran: {
            quote: 'And He found you lost and guided [you].',
            author: '~ Surah Ad-Duhaa (93:7)',
        }
    },
    {
        quran: {
            quote: 'Indeed, Allah does not burden a soul beyond that it can bear.',
            author: '~ Surah Al-Baqarah (2:286)',
        }
    }
]