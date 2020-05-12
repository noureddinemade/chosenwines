//

const link      = document.querySelector('a.randomEpisode');
const reviews   = [

    'inara-pinot-gris',
    'drink-the-sun'
    // 'big-fine-girl-riesling',
    // 'two-pairs',

    ];

//

const randomEpisode = () => {

    let random = Math.floor(Math.random() * Math.floor(reviews.length));

    link.setAttribute('href', reviews[random] + '.html');

}

//

randomEpisode();