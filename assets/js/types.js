//

const counterNum        = +document.querySelector('.counterInfo').getAttribute('data-counter');
const counterDisplay    = document.querySelector('.title h1 span');
const wineType          = counterDisplay.getAttribute('data-type');

if (counterNum > 1) {

    counterDisplay.innerHTML = `${counterNum} ${wineType} wines.`;

} else {

    counterDisplay.innerHTML = `${counterNum} ${wineType} wine.`;

}