'use strict';

//получает рандомное число в заданном диапазоне от min до max
var getRandomArbitrary = function (min, max) {
    return Math.floor( Math.random() * (max - min) + min) ;
  };

//массив количества объявлений
var adCount = ['1', '2', '3', '4', '5', '6', '7', '8'];

 
//создает массив случайной длины с характеристиками 
var getArrayOfFeatures = function (arr,) {
    var randomFeatures = [];
    var lengthOfRandomFeatures = getRandomArbitrary(2, arr.length + 1);
    for (var i = 0; i < lengthOfRandomFeatures && i >= 0; i++) {
        var j = arr[getRandomArbitrary(0, arr.length)];
        if (i == 0 || randomFeatures.includes(j) == false) {
            randomFeatures.push(j);
        } else if (i > 0 && randomFeatures.includes(j) == true ) { 
            i -= 1
        }
    }
    return randomFeatures;
};


//получает массив из строк photos в произвольном порядке
var getPhotos = function (arr) {
    var photosArray = [];
    for (let i = 0; i < arr.length; i++){
        let j = getRandomArbitrary(0, arr.length) //порой выводит одни и теже цифры, поэтому фотографии могут повторяться, надо переделать, чтобы не повторялись  
        photosArray.push(arr[j]);
    };
    return photosArray;
};

// // массив аватарок
var arrOfAvatars = [
    'img/avatars/user01.png', 
    'img/avatars/user02.png', 
    'img/avatars/user03.png', 
    'img/avatars/user04.png', 
    'img/avatars/user05.png',
    'img/avatars/user06.png',
    'img/avatars/user07.png',
    'img/avatars/user08.png'    
];


// шаблон заполнения объекта объявления для массива объявлений
var ObjOfAd = function (count) {
    //массив заголовков объявлений
    var TITLE_OF_AD = [
        "Большая уютная квартира", "Маленькая неуютная квартира",
        "Огромный прекрасный дворец", "Маленький ужасный дворец", 
        "Красивый гостевой домик", "Некрасивый негостеприимный домик", 
        "Уютное бунгало далеко от моря", "Неуютное бунгало по колено в воде"
        ];

    //массив вида места 
    var kindOfHouse = [ 'palace', 'flat', 'house', 'bungalo'];

    var checkinTime = ['12:00', '13:00', '14:00'];

    //массив характеристик
    var features = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];

    //массив для фотографий
    var photos = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", 
"http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];
    
    var widthOfMap = document.querySelector('.map').offsetWidth;
    var jhu = document.querySelector('.map').offsetLeft;//находит отступ слева

    var x = getRandomArbitrary(jhu, jhu + widthOfMap);
    var y = getRandomArbitrary(130, 630);

    var patternOfAd = {
    "author": {
        'avatar': arrOfAvatars[count],
    },
    "offer": {
        "title": TITLE_OF_AD[getRandomArbitrary(0, TITLE_OF_AD.length)], 
        "address": `${x}, ${y}`,
        "price": getRandomArbitrary(1000, 1000000),
        "type": kindOfHouse[Math.floor(getRandomArbitrary(0, kindOfHouse.length))],
        "rooms": Math.floor(getRandomArbitrary(1, 6)),
        "guests": Math.floor(getRandomArbitrary(1, 10)),
        "checkin": checkinTime[Math.floor(getRandomArbitrary(0, checkinTime.length))],
        "checkout": checkinTime[Math.floor(getRandomArbitrary(0, checkinTime.length))],
        "features": getArrayOfFeatures(features),
        "description": ``,
        "photos": getPhotos(photos), //можно улучшить функцию
        }, 
    "location": {
        'x' : x,
        'y' : y,
        }
    };

    return patternOfAd;
  } ;

var ads = [];

var getArrayOfAds = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        ads.push(ObjOfAd(i));
    }
} ;

getArrayOfAds(adCount);

console.log(ads);

var blockMap = document.querySelector('.map');

blockMap.classList.remove('map--faded');

/* создаем и добавляем DOM элементы в разметку */

//нашли контейнеры, куда будем вставлять объявления и иконки 
var conteinerForIcons = document.querySelector('.map__pins'); 
var conteinerForAds = document.querySelector('.map');

 
//нашли содержимое шаблона для отрисовки иконки объявления
var similarIconTemplate = document.querySelector('template').content.querySelector('.map__pin'); 

//нашли содержимое шаблона для объявлений
var similarAdsTemplate = document.querySelector('template').content.querySelector('.map__card');

//сщздали фрагмент, куда в дальнейшем будем складывать иконки объявлений 
var fragmentOfIcons = document.createDocumentFragment();

var getElementsOfIcons = function (arr) {
    for (var i = 0; i < ads.length; i++) {
        var iconElement = similarIconTemplate.cloneNode(true);
        iconElement.style.left = `${arr[i].location.x}px`;
        iconElement.style.top = `${arr[i].location.y - 44}px`;
        iconElement.querySelector('img').src = arr[i].author.avatar;
    
        fragmentOfIcons.appendChild(iconElement);
    };
}

getElementsOfIcons(ads);

// //создали фрагмент, куда в дальнейшем будем вкладывать объявления
var fragmentOfAds = document.createDocumentFragment(); 

function getElementsOfAds () {
    
    for (var i = 0; i < ads.length; i++) {

        
    
        let adsElement = similarAdsTemplate.cloneNode(true); //клонировали содержимое шаблона 
        adsElement.querySelector('.popup__avatar').src = ads[i].author.avatar; 
        adsElement.querySelector('.popup__title').textContent = ads[i].offer.title;
        adsElement.querySelector('.popup__text--adress').textContent = ads[i].offer.address;
        adsElement.querySelector('.popup__price').textContent = ads[i].offer.price + ` &#x20bd;/ночь`;
        
        adsElement.querySelector('.popup__text--capacity').textContent = ads[i].offer.rooms + ' комнаты для ' + ads[i].offer.guests + ' гостей';
        adsElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + ads[i].offer.checkin + ', выезд до ' + ads[i].offer.checkout;
        
        let listOfPhotos = adsElement.querySelector('.popup__pictures');
        for (let j = 0; j < ads[i].offer.photos.length; j++) {
            let photoElement = adsElement.querySelector('.popup__pictures').querySelector('li').cloneNode(true);
            photoElement.querySelector('img').src = ads[i].offer.photos[j];
            listOfPhotos.append(photoElement);
        };
       
        fragmentOfAds.appendChild(adsElement);
    };
};

getElementsOfAds(ads);


conteinerForIcons.appendChild(fragmentOfIcons);

conteinerForAds.insertBefore(fragmentOfAds, document.querySelector('.map__filters-container'));