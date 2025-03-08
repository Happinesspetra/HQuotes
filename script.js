const authors = [
    { name: "Albert Einstein", color: "primary", quotes: [
        "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        "Imagination is more important than knowledge.",
        "Try not to become a man of success, but rather try to become a man of value.",
        "A person who never made a mistake never tried anything new.",
        "I have no special talent. I am only passionately curious.",
        "Weakness of attitude becomes weakness of character.",
        "Look deep into nature, and then you will understand everything better.",
        "Great spirits have always encountered violent opposition from mediocre minds.",
        "The important thing is not to stop questioning.",
        "Logic will get you from A to B. Imagination will take you everywhere."
    ] },
    { name: "Oprah Winfrey", color: "pink", quotes: [
        "Turn your wounds into wisdom.",
        "The biggest adventure you can take is to live the life of your dreams.",
        "Be thankful for what you have; you'll end up having more.",
        "Doing the best at this moment puts you in the best place for the next moment.",
        "Surround yourself only with people who are going to take you higher.",
        "Think like a queen. A queen is not afraid to fail.",
        "True forgiveness is when you can say, 'Thank you for that experience.'",
        "You can have it all. Just not all at once.",
        "You don't become what you want, you become what you believe.",
        "Everything in your life is waiting for you to recognize it."
    ] },
    { name: "J.K. Rowling", color: "orange", quotes: [
        "It is our choices that show what we truly are, far more than our abilities.",
        "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
        "We do not need magic to transform our world. We carry all the power we need inside ourselves already.",
        "The world is full of wonderful things you haven’t seen yet. Don’t ever give up on the chance of seeing them.",
        "You control your own life. Your own will is extremely powerful.",
        "Rock bottom became the solid foundation on which I rebuilt my life.",
        "Failure means stripping away the inessential.",
        "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
        "Anything’s possible if you’ve got enough nerve.",
        "Indifference and neglect often do much more damage than outright dislike."
    ] },
    { name: "Mark Twain", color: "danger", quotes: [
        "The secret of getting ahead is getting started.",
        "Courage is resistance to fear, mastery of fear, not absence of fear.",
        "Kindness is a language which the deaf can hear and the blind can see.",
        "The best way to cheer yourself up is to try to cheer someone else up.",
        "Do the right thing. It will gratify some people and astonish the rest.",
        "Age is an issue of mind over matter. If you don't mind, it doesn't matter.",
        "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
        "If you tell the truth, you don't have to remember anything.",
        "Wrinkles should merely indicate where smiles have been.",
        "Good friends, good books, and a sleepy conscience: this is the ideal life."
    ] },
    { name: "Paulo Coelho", color: "lime", quotes: [
        "When you want something, all the universe conspires in helping you to achieve it.",
        "One day you will wake up and there won’t be any more time to do the things you’ve always wanted. Do it now.",
        "Don’t waste your time with explanations, people only hear what they want to hear.",
        "You drown not by falling into a river, but by staying submerged in it.",
        "When you can’t go back, you have to worry only about the best way of moving forward.",
        "Tears are words that need to be written.",
        "If you’re brave enough to say goodbye, life will reward you with a new hello.",
        "No one loses anyone, because no one owns anyone.",
        "It’s the possibility of having a dream come true that makes life interesting.",
        "Don’t give in to your fears. If you do, you won’t be able to talk to your heart."
    ] },
    { name: "Napoleon Hill", color: "indigo", quotes: [
        "Whatever the mind can conceive and believe, it can achieve.",
        "Don’t wait. The time will never be just right.",
        "Set your mind on a definite goal and observe how quickly the world stands aside to let you pass.",
        "Strength and growth come only through continuous effort and struggle.",
        "A goal is a dream with a deadline.",
        "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.",
        "Do not be afraid of a little opposition. Remember that the kite rises against the wind, rather than with it.",
        "Your big opportunity may be right where you are now.",
        "Success comes to those who become success-conscious.",
        "You might well remember that nothing can bring you success but yourself.."
    ] },
    { name: "Maya Angelou", color: "info", quotes: [
        "If you don't like something, change it. If you can't change it, change your attitude.",
        "Try to be a rainbow in someone's cloud.",
        "We may encounter many defeats but we must not be defeated.",
        "I can be changed by what happens to me, but I refuse to be reduced by it.",
        "You can't use up creativity. The more you use, the more you have.",
        "Courage is the most important of all virtues.",
        "Nothing will work unless you do.",
        "If one has courage, nothing can dim the light which shines from within.",
        "Hate, it has caused a lot of problems in the world, but has not solved one yet.",
        "Success is liking yourself, liking what you do, and liking how you do it."
    ] },
    { name: "William Shakespeare", color: "maroon", quotes: [
        "Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.",
        "We know what we are, but know not what we may be.",
        "Love all, trust a few, do wrong to none.",
        "The fault, dear Brutus, is not in our stars, but in ourselves, that we are underlings.",
        "Cowards die many times before their deaths; the valiant never taste of death but once.",
        "All the world’s a stage, and all the men and women merely players.",
        "Expectation is the root of all heartache.",
        "Our doubts are traitors and make us lose the good we oft might win by fearing to attempt.",
        "It is not in the stars to hold our destiny but in ourselves.",
        "To thine own self be true, and it must follow, as the night the day, thou canst not then be false to any man."
    ] },
    { name: "Ralph Waldo Emerson", color: "success", quotes: [
        "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        "For every minute you remain angry, you give up sixty seconds of peace of mind.",
        "Nothing great was ever achieved without enthusiasm..",
        "The only person you are destined to become is the person you decide to be.",
        "Make the most of yourself, for that is all there is of you.",
        "Dare to live the life you have dreamed for yourself. Go forward and make your dreams come true.",
        "Our greatest glory is not in never failing, but in rising up every time we fail.",
        "Happiness is a perfume you cannot pour on others without getting some on yourself.",
        "The invariable mark of wisdom is to see the miraculous in the common."
    ] },
    { name: "Dale Carnegie", color: "brown", quotes: [
        "Success is getting what you want. Happiness is wanting what you get.",
        "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
        "Don’t be afraid to give your best to what seemingly are small jobs.",
        "The successful man will profit from his mistakes and try again in a different way.",
        "The only way to get the best of an argument is to avoid it.",
        "Remember, today is the tomorrow you worried about yesterday.",
        "People rarely succeed unless they have fun in what they are doing.",
        "Act as if what you do makes a difference. It does.",
        "If you want to conquer fear, don’t sit home and think about it. Go out and get busy.",
        "Take a chance! All life is a chance. The man who goes farthest is generally the one who is willing to do and dare."
    ] },
    { name: "Stephen R. Covey", color: "teal", quotes: [
        "The key is in not spending time, but in investing it.",
        "I am not a product of my circumstances. I am a product of my decisions.",
        "Seek first to understand, then to be understood.",
        "Most people do not listen with the intent to understand; they listen with the intent to reply.",
        "Live out of your imagination, not your history.",
        "Trust is the glue of life. It’s the most essential ingredient in effective communication.",
        "Your most important work is always ahead of you, never behind you.",
        "Strength lies in differences, not in similarities.",
        "To change ourselves effectively, we first have to change our perceptions.",
        "Begin with the end in mind."
    ] },
    { name: "John C. Maxwell", color: "warning", quotes: [
        "The secret of your success is determined by your daily agenda.",
        "Leadership is not about titles, positions, or flowcharts. It is about one life influencing another.",
        "Change is inevitable. Growth is optional.",
        "A leader is one who knows the way, goes the way, and shows the way.",
        "The greatest mistake we make is living in constant fear that we will make one.",
        "People may hear your words, but they feel your attitude.",
        "Dreams don’t work unless you do.'",
        "Small disciplines repeated with consistency every day lead to great achievements gained slowly over time.",
        "You don’t overcome challenges by making them smaller but by making yourself bigger.",
        "Success is due to our stretching to the challenges of life. Failure comes when we shrink from them."
    ] },
];

const container = document.getElementById("authors-container");

authors.forEach((author, index) => {
    let card = document.createElement("div");
    card.className = "col-md-4 mb-4";
    card.innerHTML = `
        <div class="card bg-${author.color} text-white quote-card" onclick="showQuotes(${index})" style="margin: 10px;">
            <div class="card-body">
                <h5 class="card-title">${author.name}</h5>
            </div>
        </div>
    `;
    container.appendChild(card);
});

function showQuotes(authorIndex) {
    let author = authors[authorIndex];
    let quotesHTML = `
        <header class="d-flex justify-content-between align-items-center py-3 fixed-top bg-${author.color} text-white" style="width: 100%; z-index: 1000;">
            <a href="https://github.com/Happinesspetra" class="ms-3 text-white" style="text-decoration: none;"><h1>Happy</h1></a>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon" style="color: white;"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link fw-bold text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bold text-white" aria-current="page" href="#">Quotes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bold text-white" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bold text-white" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <button id="theme-toggle" class="btn btn-light ms-3" style="margin-right: 20px;">
                <i class="fas fa-moon"></i>
            </button>
        </header>
        <style>
            .nav-link:hover {
                color: white !important;
            }
            .navbar-toggler {
                color: white;
                border-color: white;
            }
        </style>
        <div class='container text-center mt-5' style='margin-top: 100px;'>
            <h1 class='text-center mb-4'>Quotes by ${author.name}</h1>
            <div class='row'>
    `;
    author.quotes.forEach(quote => {
        quotesHTML += `
            <div class="col-md-6 mb-3">
                <div class="card bg-${author.color} p-3 text-white quote-card" style="margin: 10px;">
                    <div class="card-body">${quote}</div>
                </div>
            </div>
        `;
    });
    quotesHTML += `
            </div>
            <button class='btn btn-${author.color} mt-3' onclick='window.location.reload()'>Back</button>
        </div>
        <footer class="text-white text-center py-3 mt-2 bg-${author.color}">
            <div class="container">
                <p>&copy; 2024 Motivational Quotes. All rights reserved.</p>
                <p>Developed by <a href="https://github.com/Happinesspetra" class="text-white">HappiBo.</a></p>
                <p>
                    <a href="https://twitter.com/Happine47968980" class="text-white me-2">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com/happibo_" class="text-white me-2">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://linkedin.com/in/happiness-michael-26b20a244" class="text-white">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </p>
            </div>
        </footer>
        <a href="#" class="scroll-top bg-${author.color}" style="display: none;"><i class="fas fa-arrow-up"></i></a>
    `;
    document.body.innerHTML = quotesHTML;

    // Re-attach event listeners for theme toggle and scroll top button
    document.getElementById('theme-toggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const themeIcon = document.querySelector('#theme-toggle i');
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });

    window.addEventListener('scroll', () => {
        const scrollTop = document.querySelector('.scroll-top');
        if (window.scrollY > 100) {
            scrollTop.style.display = 'block';
        } else {
            scrollTop.style.display = 'none';
        }

        document.querySelectorAll('.quote-card').forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                card.classList.add('visible');
            }
        });
    });

    document.querySelector('.scroll-top').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

window.addEventListener('scroll', () => {
    const scrollTop = document.querySelector('.scroll-top');
    if (window.scrollY > 100) {
        scrollTop.style.display = 'block';
    } else {
        scrollTop.style.display = 'none';
    }

    document.querySelectorAll('.quote-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            card.classList.add('visible');
        }
    });
});

document.querySelector('.scroll-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const themeIcon = document.querySelector('#theme-toggle i');
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});