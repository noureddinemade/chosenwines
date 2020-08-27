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
    'rosatea-field-blend',
    'o',
    'bonkers',
    'mandoon-old-vine-shiraz',
    'maneggiare-con-cura',
    'late-harvest-lamour',
    'orange',
    'alamos-malbec',
    'preservative-free-sauvignon-blanc',
    'vivo'

    ];

//

const randomEpisode = () => {

    let random = Math.floor(Math.random() * Math.floor(reviews.length));

    link.setAttribute('href', reviews[random] + '.html');

}

//

randomEpisode();