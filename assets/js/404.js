//

const link      = document.querySelector('a.randomEpisode');
const reviews   = [

    'inara-pinot-gris',
    'drink-the-sun',
    'big-fine-girl',
    'two-pairs-grenache',
    'purple-reign',
    'ded-reckoning',
    'gris-diddly-dee',
    'the-winery-of-good-hope-chenin-blanc',
    'vortex',
    'rosatea-field-blend'

    ];

//

const randomEpisode = () => {

    let random = Math.floor(Math.random() * Math.floor(reviews.length));

    link.setAttribute('href', reviews[random] + '.html');

}

//

randomEpisode();