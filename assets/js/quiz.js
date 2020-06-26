const questions = [

    {
        id: 0,
        question: 'What would you prefer to do on a Saturday night?',
        score: 1,
        answers: [
            {
                title: 'Partying',
                id: 0
            },
            {
                title: 'At a bar or restaurant',
                id: 1
            },
            {
                title: 'Escape room',
                id: 2
            },
            {
                title: 'Watching YouTube videos',
                id: 3
            },
            {
                title: 'At the theatre',
                id: 4
            },
            {
                title: 'Curled up with a book',
                id: 5
            },
        ]
    },

    {
        id: 1,
        question: 'Which one of these jobs would you prefer?',
        score: 1,
        answers: [
            {
                title: 'Event planner for the stars',
                id: 0
            },
            {
                title: 'Accountant for NASA',
                id: 1
            },
            {
                title: 'Exotic Animal Trainer',
                id: 2
            },
            {
                title: 'Beauty influencer',
                id: 3
            },
            {
                title: 'Criminal Lawyer',
                id: 4
            },
            {
                title: 'Artist or however I can Express myself',
                id: 5
            },
        ]
    },

    {
        id: 2,
        question: 'If you were a candy what would you be?',
        score: 1,
        answers: [
            {
                title: 'Erotic gummies',
                id: 0
            },
            {
                title: 'Jelly beans',
                id: 1
            },
            {
                title: 'Flying saucers',
                id: 2
            },
            {
                title: 'Fairy floss',
                id: 3
            },
            {
                title: 'Chocolate truffles',
                id: 4
            },
            {
                title: 'Sour candy',
                id: 5
            },
        ]
    },

    {
        id: 3,
        question: 'What is your go to coffee shop order?',
        score: 1,
        answers: [
            {
                title: 'Anything I can make Irish',
                id: 0
            },
            {
                title: 'Cappuccino',
                id: 1
            },
            {
                title: 'Chai latte',
                id: 2
            },
            {
                title: 'Milkshake',
                id: 3
            },
            {
                title: 'Earl grey tea',
                id: 4
            },
            {
                title: 'Hot chocolate',
                id: 5
            },
        ]
    },

    {
        id: 4,
        question: 'Which scoop of ice cream do you prefer? ',
        score: 1,
        answers: [
            {
                title: 'Rum, hold the raisin',
                id: 0
            },
            {
                title: 'Vanilla',
                id: 1
            },
            {
                title: 'Pistachio',
                id: 2
            },
            {
                title: 'Bubble gum',
                id: 3
            },
            {
                title: 'Dark chocolate',
                id: 4
            },
            {
                title: 'Doesn’t matter I just want the whole tub',
                id: 5
            },
        ]
    },

    {
        id: 5,
        question: 'What super power would you want to have?',
        score: 1,
        answers: [
            {
                title: 'Never getting a hangover',
                id: 0
            },
            {
                title: 'To always be on time',
                id: 1
            },
            {
                title: 'Find a parking spot, anytime, anywhere',
                id: 2
            },
            {
                title: 'The ability to talk to dogs',
                id: 3
            },
            {
                title: 'To be able to summon any book ever written',
                id: 4
            },
            {
                title: 'To never pay for concert tickets',
                id: 5
            },
        ]
    },

    {
        id: 6,
        question: 'Which emoji would you be?',
        score: 1,
        answers: [
            {
                title: '💣',
                id: 0
            },
            {
                title: '🍕',
                id: 1
            },
            {
                title: '🐢',
                id: 2
            },
            {
                title: '🦄',
                id: 3
            },
            {
                title: '🌲',
                id: 4
            },
            {
                title: '👻',
                id: 5
            },
        ]
    }

]

const categories = [

    {
        id: 0,
        score: 0,
        title: 'Prosecco',
        message: 'You are the life and soul of the party. You love to live it up no matter where you are. And if you\'re honest with yourself you\'re never seen without a drink in your hand.'
    },

    {
        id: 1,
        score: 0,
        title: 'Sauvignon Blanc',
        message: 'You are reliable and dependable. You might think people will get bored of you but no matter what they\'ll always come back.'
    },

    {
        id: 2,
        score: 0,
        title: 'Chardonnay',
        message: 'People under estimate you, they think they have you sussed but that\'s because there are so many sides to you.'
    },

    {
        id: 3,
        score: 0,
        title: 'Pink Moscato',
        message: 'You\'re very sweet and because of that some people think you\'re immature. Those that love you can\'t get enough.'
    },

    {
        id: 4,
        score: 0,
        title: 'Shiraz',
        message: 'You\'re big and bold and know what you like. You add a touch of sophistication to any event.'
    },

    {
        id: 5,
        score: 0,
        title: 'Pinot Noir',
        message: 'You\'re complex and come people find you difficult but you can only open up around certain people.'
    }



]

//

const quiz              = document.querySelector('.quiz');
const result            = quiz.querySelector('.result');
const currentQ          = quiz.querySelector('.question');

const btnNext           = quiz.querySelector('.btn.next');
const btnPrev           = quiz.querySelector('.btn.prev');
const btnFinish         = quiz.querySelector('.btn.finish');

const currentQTitle     = currentQ.querySelector('p');
const currentQAnswers   = currentQ.querySelector('ol');

const resultTitle       = result.querySelector('h3'); 
const resultDesc        = result.querySelector('p');
const resultImg         = result.querySelector('img');


let currentChoice;

//

const setQuestion = (id) => {

    let q = questions[id];
    let a = q.answers;

    currentQAnswers.innerHTML = '';

    currentQ.setAttribute('data-question', q.id);
    currentQTitle.setAttribute('data-progress', `${id + 1} / ${questions.length}`);
    currentQTitle.innerHTML = q.question;

    a.forEach(answer => {

        let o = Math.floor(Math.random() * 7);

        const li = document.createElement('li');

        li.setAttribute('data-order', o);
        li.innerHTML = `<a class="choice" data-result="${answer.id}">${answer.title}</a>`;

        currentQAnswers.append(li);

    });

    btnNext.classList.add('-disabled');
    btnFinish.classList.add('-disabled');
    
    countQuestions();

};

const addScore = (q,a) => {

    let question    = questions[q];
    let score       = question.score;
    let cat         = categories[a];
    let current     = cat.score;

    cat.score = current + score;

}

const nextQuestion = (q,a) => {

    addScore(q,a)
    setQuestion(q);
    countQuestions();

    currentQ.scrollIntoView();

};

const countQuestions = () => {

    let q = questions.length;
    let c = +currentQ.getAttribute('data-question');
    let n = +currentQ.getAttribute('data-question') + 1;

    if (n >= q) {

        btnNext.style.display = 'none';
        btnFinish.style.display = 'block';

    } else {

        btnNext.style.display = 'block';
        btnFinish.style.display = 'none';

    }


};

const finishQuiz = () => {

    categories.sort((a,b) => b.score - a.score);

    let grape = categories[0];

    currentQ.style.display = 'none';
    btnFinish.style.display = 'none';
    result.style.display = 'block';

    resultTitle.innerHTML   = grape.title;
    resultDesc.innerHTML    = grape.message;

};

//

setQuestion(0);

//

document.addEventListener('click', function(e) {

    if (e.target && e.target.classList.contains('choice')) {

        let choices     = currentQAnswers.querySelectorAll('li');
        let current     = e.target;

        currentChoice   = current.getAttribute('data-result');

        choices.forEach(choice => {

            choice.classList.add('-off');
            choice.classList.remove('-on');

        });

        current.parentNode.classList.remove('-off');
        current.parentNode.classList.add('-on');
        btnNext.classList.remove('-disabled');
        btnFinish.classList.remove('-disabled');

    }

});

//

btnNext.addEventListener('click', function() {

    if (!this.classList.contains('-disabled')) {

        let q = +currentQ.getAttribute('data-question') + 1;

        nextQuestion(q,currentChoice);

        console.log(categories);

    }

});

btnFinish.addEventListener('click', function() {

    if (!this.classList.contains('-disabled')) {

        let q = +currentQ.getAttribute('data-question');

        addScore(q, currentChoice)
        finishQuiz();

    }

});

//