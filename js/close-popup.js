'use strict';

/* при нажатии на крестик в объявлении, закрывает объявление */

let firstElemOfAd = arrOfAds[0];
let secondElemOfAd = arrOfAds[1];
let thirdElem = arrOfAds[2];
let forthElem = arrOfAds[3];
let fifthElem = arrOfAds[4];
let sixdElem = arrOfAds[5];
let seventhdElem = arrOfAds[6];
let eighthdElem = arrOfAds[7];


firstElemOfAd.addEventListener('click', function(event) {
    let closePopup = firstElemOfAd.querySelector('.popup__close');
    if (event.target == closePopup) {
         firstElemOfAd.classList.add('hidden');
    };
});

secondElemOfAd.addEventListener('click', function(event) {
    let closePopup = secondElemOfAd.querySelector('.popup__close');
    if (event.target == closePopup) {
         secondElemOfAd.classList.add('hidden');
    };
});

thirdElem.addEventListener('click', function(event) {
    let closePopup = thirdElem.querySelector('.popup__close');
    if (event.target == closePopup) {
         thirdElem.classList.add('hidden');
    };
});

forthElem.addEventListener('click', function(event) {
    let closePopup = forthElem.querySelector('.popup__close');
    if (event.target == closePopup) {
         forthElem.classList.add('hidden');
    };
});

fifthElem.addEventListener('click', function(event) {
    let closePopup = fifthElem.querySelector('.popup__close');
    if (event.target == closePopup) {
         fifthElem.classList.add('hidden');
    };
});

sixdElem.addEventListener('click', function(event) {
    let closePopup = sixdElem.querySelector('.popup__close');
    if (event.target == closePopup) {
         sixdElem.classList.add('hidden');
    };
});

seventhdElem.addEventListener('click', function(event) {
    let closePopup = seventhdElem.querySelector('.popup__close');
    if (event.target == closePopup) {
         seventhdElem.classList.add('hidden');
    };
});

eighthdElem.addEventListener('click', function(event) {
    let closePopup = eighthdElem.querySelector('.popup__close');
    if (event.target == closePopup) {
        eighthdElem.classList.add('hidden');
    };
});
