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
    document.querySelector('.toggle').classList.remove('active');
    quoteType.style.color = '#fff'
    quoteType.style.backgroundColor = '#000'
    document.body.style.transition = 'ease-in 1'
    document.body.style.color = '#000'
    document.body.style.backgroundColor = '#fff'
}

function darkMode() {
    document.querySelector('.toggle').classList.add('active');
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
        phylosophical: {
            quote: "The unexamined life is not worth living.",
            author: "~Socrates"
        }
    },
    {
        phylosophical: {
            quote: "Knowing others is intelligence; knowing yourself is true wisdom.",
            author: "~Lao Tzu"
        }
    },
    {
        phylosophical: {
            quote: "Happiness depends upon ourselves.",
            author: "~Aristotle"
        }
    },
    {
        phylosophical: {
            quote: "He who has a why to live can bear almost any how.",
            author: "~Friedrich Nietzsche"
        }
    },
    {
        phylosophical: {
            quote: "Do not pray for an easy life, pray for the strength to endure a difficult one.",
            author: "~Bruce Lee"
        }
    },
    {
        phylosophical: {
            quote: "Be the change that you wish to see in the world.",
            author: "~Mahatma Gandhi"
        }
    },
    {
        phylosophical: {
            quote: "Life is what happens when you're busy making other plans.",
            author: "~John Lennon"
        }
    },
    {
        phylosophical: {
            quote: "Injustice anywhere is a threat to justice everywhere.",
            author: "~Martin Luther King Jr."
        }
    },
    {
        phylosophical: {
            quote: "It is not length of life, but depth of life.",
            author: "~Ralph Waldo Emerson"
        }
    },
    {
        phylosophical: {
            quote: "The only true wisdom is in knowing you know nothing.",
            author: "~Socrates"
        }
    },
    {
        phylosophical: {
            quote: "Most people are other people. Their thoughts are someone else's opinions, their lives a mimicry, their passions a quotation.",
            author: "~Oscar Wilde"
        }
    },
    {
        phylosophical: {
            quote: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
            author: "~Albert Camus"
        }
    },
    {
        phylosophical: {
            quote: "No man ever steps in the same river twice, for it's not the same river and he's not the same man.",
            author: "~Heraclitus"
        }
    },
    {
        phylosophical: {
            quote: "Patience is bitter, but its fruit is sweet.",
            author: "~Jean-Jacques Rousseau"
        }
    },
    {
        phylosophical: {
            quote: "I must find a truth that is true for me.",
            author: "~Søren Kierkegaard"
        }
    },
    {
        phylosophical: {
            quote: "Learn what is to be taken seriously and laugh at the rest.",
            author: "~Hermann Hesse"
        }
    },
    {
        phylosophical: {
            quote: "The fundamental delusion of humanity is to suppose that I am here and you are out there.",
            author: "~Yasutani Roshi"
        }
    },
    {
        phylosophical: {
            quote: "The struggle between 'for' and 'against' is the mind's worst disease.",
            author: "~Sent Ts'an"
        }
    },
    {
        phylosophical: {
            quote: "Truth, she thought. As terrible as death. But harder to find.",
            author: "~Philip K. Dick"
        }
    },
    {
        phylosophical: {
            quote: "I don't believe anything, but I have many suspicions.",
            author: "~Robert Anton Wilson"
        }
    },
    {
        phylosophical: {
            quote: "It is what you read when you don't have to that determines what you will be when you can't help it.",
            author: "~Oscar Wilde"
        }
    },
    {
        phylosophical: {
            quote: "We should read for power. Man reading should be man intensely alive. The book should be a ball of light in one's hand.",
            author: "~Ezra Pound"
        }
    },
    {
        phylosophical: {
            quote: "Nobody is smarter than you are. And what if they are? What good is their understanding doing you?",
            author: "~Terence McKenna"
        }
    },
    {
        phylosophical: {
            quote: "Learn what is to be taken seriously and laugh at the rest.",
            author: "~Hermann Hesse"
        }
    },
    {
        phylosophical: {
            quote: "The wisest of all, in my opinion, is he who can, if only once a month, call himself a fool — a faculty unheard of nowadays.",
            author: "~Fyodor Dostoevsky"
        }
    },
    {
        phylosophical: {
            quote: "Truth, she thought. As terrible as death. But harder to find.",
            author: "~Philip K. Dick"
        }
    },
    {
        phylosophical: {
            quote: "I don't believe anything, but I have many suspicions.",
            author: "~Robert Anton Wilson"
        }
    },
    {
        phylosophical: {
            quote: "The struggle between 'for' and 'against' is the mind's worst disease.",
            author: "~Sent Ts'an"
        }
    },
    {
        phylosophical: {
            quote: "The fundamental delusion of humanity is to suppose that I am here and you are out there.",
            author: "~Yasutani Roshi"
        }
    },
    {
        phylosophical: {
            quote: "It is what you read when you don't have to that determines what you will be when you can't help it.",
            author: "~Oscar Wilde"
        }
    },
    {
        phylosophical: {
            quote: "We should read for power. Man reading should be man intensely alive. The book should be a ball of light in one's hand.",
            author: "~Ezra Pound"
        }
    },
    {
        phylosophical: {
            quote: "Nobody is smarter than you are. And what if they are? What good is their understanding doing you?",
            author: "~Terence McKenna"
        }
    },
    {
        phylosophical: {
            quote: "Learn what is to be taken seriously and laugh at the rest.",
            author: "~Hermann Hesse"
        }
    },
    {
        phylosophical: {
            quote: "The wisest of all, in my opinion, is he who can, if only once a month, call himself a fool — a faculty unheard of nowadays.",
            author: "~Fyodor Dostoevsky"
        }
    },
    {
        phylosophical: {
            quote: "Truth, she thought. As terrible as death. But harder to find.",
            author: "~Philip K. Dick"
        }
    },
    {
        phylosophical: {
            quote: "I don't believe anything, but I have many suspicions.",
            author: "~Robert Anton Wilson"
        }
    },
    {
        phylosophical: {
            quote: "The struggle between 'for' and 'against' is the mind's worst disease.",
            author: "~Sent Ts'an"
        }
    },
    {
        phylosophical: {
            quote: "The fundamental delusion of humanity is to suppose that I am here and you are out there.",
            author: "~Yasutani Roshi"
        }
    },
    {
        phylosophical: {
            quote: "It is what you read when you don't have to that determines what you will be when you can't help it.",
            author: "~Oscar Wilde"
        }
    },
    {
        phylosophical: {
            quote: "We should read for power. Man reading should be man intensely alive. The book should be a ball of light in one's hand.",
            author: "~Ezra Pound"
        }
    },
    {
        phylosophical: {
            quote: "Nobody is smarter than you are. And what if they are? What good is their understanding doing you?",
            author: "~Terence McKenna"
        }
    },
    {
        phylosophical: {
            quote: "Learn what is to be taken seriously and laugh at the rest.",
            author: "~Hermann Hesse"
        }
    },
    {
        phylosophical: {
            quote: "The wisest of all, in my opinion, is he who can, if only once a month, call himself a fool — a faculty unheard of nowadays.",
            author: "~Fyodor Dostoevsky"
        }
    },
    {
        phylosophical: {
            quote: "Truth, she thought. As terrible as death. But harder to find.",
            author: "~Philip K. Dick"
        }
    },
    {
        phylosophical: {
            quote: "I don't believe anything, but I have many suspicions.",
            author: "~Robert Anton Wilson"
        }
    },
    {
        phylosophical: {
            quote: "The struggle between 'for' and 'against' is the mind's worst disease.",
            author: "~Sent Ts'an"
        }
    },
    {
        phylosophical: {
            quote: "The fundamental delusion of humanity is to suppose that I am here and you are out there.",
            author: "~Yasutani Roshi"
        }
    },
    {
        phylosophical: {
            quote: "It is what you read when you don't have to that determines what you will be when you can't help it.",
            author: "~Oscar Wilde"
        }
    },
    {
        phylosophical: {
            quote: "We should read for power. Man reading should be man intensely alive. The book should be a ball of light in one's hand.",
            author: "~Ezra Pound"
        }
    },
    {
        phylosophical: {
            quote: "Nobody is smarter than you are. And what if they are? What good is their understanding doing you?",
            author: "~Terence McKenna"
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
        biblical: {
            quote: "I can do all things through Christ who strengthens me.",
            author: "~Philippians 4:13"
        }
    },
    {
        biblical: {
            quote: "For God has not given us a spirit of fear, but of power and of love and of a sound mind.",
            author: "~2 Timothy 1:7"
        }
    },
    {
        biblical: {
            quote: "The Lord is my shepherd; I shall not want.",
            author: "~Psalm 23:1"
        }
    },
    {
        biblical: {
            quote: "The Lord is near to all who call on him.",
            author: "~Psalm 145:18"
        }
    },
    {
        biblical: {
            quote: "For I know the plans I have for you, declares the Lord.",
            author: "~Jeremiah 29:11"
        }
    },
    {
        biblical: {
            quote: "Blessed are the peacemakers, for they will be called children of God.",
            author: "~Matthew 5:9"
        }
    },
    {
        biblical: {
            quote: "The Lord is my light and my salvation; whom shall I fear?",
            author: "~Psalm 27:1"
        }
    },
    {
        biblical: {
            quote: "Trust in the Lord with all your heart.",
            author: "~Proverbs 3:5"
        }
    },
    {
        biblical: {
            quote: "The fear of the Lord is the beginning of wisdom.",
            author: "~Proverbs 9:10"
        }
    },
    {
        biblical: {
            quote: "Love your neighbor as yourself.",
            author: "~Matthew 22:39"
        }
    },
    {
        biblical: {
            quote: "Cast all your anxiety on Him because He cares for you.",
            author: "~1 Peter 5:7"
        }
    },
    {
        biblical: {
            quote: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
            author: "~Joshua 1:9"
        }
    },
    {
        biblical: {
            quote: "Commit to the Lord whatever you do, and He will establish your plans.",
            author: "~Proverbs 16:3"
        }
    },
    {
        biblical: {
            quote: "Let all that you do be done in love.",
            author: "~1 Corinthians 16:14"
        }
    },
    {
        biblical: {
            quote: "The steadfast love of the Lord never ceases; His mercies never come to an end.",
            author: "~Lamentations 3:22"
        }
    },
    {
        biblical: {
            quote: "Do not be conformed to this world, but be transformed by the renewal of your mind.",
            author: "~Romans 12:2"
        }
    },
    {
        biblical: {
            quote: "Rejoice in hope, be patient in tribulation, be constant in prayer.",
            author: "~Romans 12:12"
        }
    },
    {
        biblical: {
            quote: "Give thanks in all circumstances; for this is the will of God in Christ Jesus for you.",
            author: "~1 Thessalonians 5:18"
        }
    },
    {
        biblical: {
            quote: "For where your treasure is, there your heart will be also.",
            author: "~Matthew 6:21"
        }
    },
    {
        biblical: {
            quote: "He heals the brokenhearted and binds up their wounds.",
            author: "~Psalm 147:3"
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
    },
    {
        quran: {
            quote: "Indeed, with hardship comes ease.",
            author: "~Surah Ash-Sharh (94:6)"
        }
    },
    {
        quran: {
            quote: "And He found you lost and guided you.",
            author: "~Surah Ad-Duhaa (93:7)"
        }
    },
    {
        quran: {
            quote: "Indeed, Allah does not burden a soul beyond that it can bear.",
            author: "~Surah Al-Baqarah (2:286)"
        }
    },
    {
        quran: {
            quote: "So verily, with the hardship, there is relief.",
            author: "~Surah Ash-Sharh (94:7)"
        }
    },
    {
        quran: {
            quote: "Say, 'My Lord, increase me in knowledge.'",
            author: "~Surah Taha (20:114)"
        }
    },
    {
        quran: {
            quote: "Your ally is none but Allah and His Messenger.",
            author: "~Surah Al-Ma'idah (5:55)"
        }
    },
    {
        quran: {
            quote: "Indeed, Allah is with those who fear Him and those who are doers of good.",
            author: "~Surah An-Nahl (16:128)"
        }
    },
    {
        quran: {
            quote: "And whosoever fears Allah... He will make a way for him to get out from every difficulty.",
            author: "~Surah At-Talaq (65:2)"
        }
    },
    {
        quran: {
            quote: "Indeed, Allah is over all things competent.",
            author: "~Surah Al-Mujadila (58:7)"
        }
    },
    {
        quran: {
            quote: "Indeed, Allah commands you to render trusts to whom they are due.",
            author: "~Surah An-Nisa (4:58)"
        }
    },
    {
        quran: {
            quote: "And whoever relies upon Allah – then He is sufficient for him.",
            author: "~Surah At-Talaq (65:3)"
        }
    },
    {
        quran: {
            quote: "And whoever does righteous deeds, whether male or female, while being a believer – those will enter Paradise and will not be wronged.",
            author: "~Surah An-Nisa (4:124)"
        }
    },
    {
        quran: {
            quote: "Indeed, Allah loves those who rely upon Him.",
            author: "~Surah Al-Imran (3:159)"
        }
    },
    {
        quran: {
            quote: "Indeed, Allah loves the steadfast.",
            author: "~Surah Al-Imran (3:146)"
        }
    },
    {
        quran: {
            quote: "And We have certainly made the Qur'an easy to remember. So is there any who will remember?",
            author: "~Surah Al-Qamar (54:17)"
        }
    },
    {
        quran: {
            quote: "Indeed, with every difficulty there is relief.",
            author: "~Surah Al-Inshirah (94:6)"
        }
    },
    {
        quran: {
            quote: "Do not despair of the mercy of Allah.",
            author: "~Surah Az-Zumar (39:53)"
        }
    },
    {
        quran: {
            quote: "And Allah is the best of planners.",
            author: "~Surah Al-Imran (3:54)"
        }
    },
    {
        quran: {
            quote: "Indeed, Allah is Forgiving and Merciful.",
            author: "~Surah Al-Baqarah (2:199)"
        }
    },
    {
        quran: {
            quote: "So remember Me; I will remember you.",
            author: "~Surah Al-Baqarah (2:152)"
        }
    }
]