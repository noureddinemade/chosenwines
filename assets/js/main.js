//

const aboutOverlay      = document.querySelector('section.about');
const aboutOpen         = document.querySelector('a.aboutUs');
const aboutClose        = document.querySelector('a.closeAboutUs');

//

// Toggle about us section

aboutOpen.addEventListener('click', () => {

    aboutOverlay.style.display = 'block';

});

aboutClose.addEventListener('click', () => {

    aboutOverlay.style.display = 'none';

});

//