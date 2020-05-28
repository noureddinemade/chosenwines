//

const link      = document.querySelector('a.randomEpisode');
const reviews   = [

    'inara-pinot-gris',
    'drink-the-sun',
    'big-fine-girl',
    'two-pairs',
    'purple-reign'

    ];

//

const randomEpisode = () => {

    let random = Math.floor(Math.random() * Math.floor(reviews.length));

    link.setAttribute('href', reviews[random] + '.html');

}

//

randomEpisode();