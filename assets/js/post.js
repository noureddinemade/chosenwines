//

const episodeBtn                = document.querySelector('a.watchEpisode');
const episodeCont               = document.querySelector('.vid');
const episodeVideo              = episodeCont.querySelector('iframe');

let episodeBtnCount             = 0;

//

episodeBtn.addEventListener('click', () => {

    if (episodeBtnCount == 0) {

        episodeCont.style.display = 'block';
        episodeBtn.classList.add('on');
        episodeBtn.innerHTML = 'Close video';

        episodeBtnCount = 1;

    } else {

        episodeCont.style.display = 'none';
        episodeBtn.classList.remove('on');
        episodeBtn.innerHTML = 'Watch Episode';

        episodeBtnCount = 0;

    }

});