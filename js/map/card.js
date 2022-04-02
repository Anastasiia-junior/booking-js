'use strict';

(function () {

    //создает массив случайной длины с характеристиками 
    var getArrayOfFeatures = function (arr,) {
        var randomFeatures = [];
        var lengthOfRandomFeatures = getRandomArbitrary(2, arr.length + 1);
        for (var i = 0; i < lengthOfRandomFeatures && i >= 0; i++) {
            var j = arr[getRandomArbitrary(0, arr.length)];
            if (i == 0 || randomFeatures.includes(j) == false) {
                randomFeatures.push(j);
            } else if (i > 0 && randomFeatures.includes(j) == true) {
                i -= 1
            }
        }
        return randomFeatures;
    };




    //получает массив из строк photos в произвольном порядке
    var getPhotos = function (arr) {
        var photosArray = [];
        for (let i = 0; i < arr.length; i++) {
            let j = getRandomArbitrary(0, arr.length) //порой выводит одни и теже цифры, поэтому фотографии могут повторяться, надо переделать, чтобы не повторялись  
            photosArray.push(arr[j]);
        };
        return photosArray;
    };


    // шаблон заполнения объекта объявления для массива объявлений

    var ObjOfAd = function (count) {
        //массив заголовков объявлений
        const TITLE_OF_AD = [
            "Большая уютная квартира", "Маленькая неуютная квартира",
            "Огромный прекрасный дворец", "Маленький ужасный дворец",
            "Красивый гостевой домик", "Некрасивый негостеприимный домик",
            "Уютное бунгало далеко от моря", "Неуютное бунгало по колено в воде"
        ];

        //массив вида места 
        const kindOfHouse = ['palace', 'flat', 'house', 'bungalo'];

        const checkinTime = ['12:00', '13:00', '14:00'];

        //массив характеристик
        const features = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];

        //массив для фотографий
        let photos = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg",
            "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];

        let widthOfMap = document.querySelector('.map').offsetWidth;
        let jhu = document.querySelector('.map').offsetLeft;//находит отступ слева

        let x = getRandomArbitrary(jhu, jhu + widthOfMap);
        let y = getRandomArbitrary(130, 630);

        let patternOfAd = {
            "author": {
                'avatar': window.data.arrOfAvatars[count],
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
                'x': x,
                'y': y,
            }
        };

        return patternOfAd;
    };

    window.ads = [];

    let getArrayOfAds = function (arr) {
        for (let i = 0; i < arr.length; i++) {
            ads.push(ObjOfAd(i));
        }
    };

    getArrayOfAds(window.data.adsCount);

    console.log(ads);


    //нашли содержимое шаблона для объявлений
    var similarAdsTemplate = document.querySelector('template').content.querySelector('.map__card');


    // //создали фрагмент, куда в дальнейшем будем вкладывать объявления
    var fragmentOfAds = document.createDocumentFragment();

    function getElementsOfAds(arr) {

        for (var i = 0; i < arr.length; i++) {

            let adsElement = similarAdsTemplate.cloneNode(true); //клонировали содержимое шаблона 
            adsElement.querySelector('.popup__avatar').src = arr[i].author.avatar;
            adsElement.querySelector('.popup__title').textContent = arr[i].offer.title;
            adsElement.querySelector('.popup__text--adress').textContent = arr[i].offer.address;
            adsElement.querySelector('.popup__price').textContent = arr[i].offer.price + ` &#x20bd;/ночь`;

            adsElement.querySelector('.popup__text--capacity').textContent = arr[i].offer.rooms + ' комнаты для ' + arr[i].offer.guests + ' гостей';
            adsElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + arr[i].offer.checkin + ', выезд до ' + arr[i].offer.checkout;

            let listOfPhotos = adsElement.querySelector('.popup__pictures');
            for (let j = 0; j < arr[i].offer.photos.length; j++) {
                let photoElement = adsElement.querySelector('.popup__pictures').querySelector('li').cloneNode(true);
                photoElement.querySelector('img').src = arr[i].offer.photos[j];
                listOfPhotos.append(photoElement);
            };

            fragmentOfAds.appendChild(adsElement);
        };

    };

    //нашли контейнеры, куда будем вставлять объявления и иконки 
    var conteinerForAds = document.querySelector('.map');

    //отрисовывает все объявления
    getElementsOfAds(ads);
    conteinerForAds.insertBefore(fragmentOfAds, document.querySelector('.map__filters-container'));

    //скрывает все отрисованные объявления 
    window.arrOfAds = document.querySelectorAll('.map__card');

    arrOfAds.forEach(elem => elem.classList.add('hidden'));

    /*добавляет отрисовку информации по объявлению при нажатии на значок пина объявления */

    function getsmthHandler(event) {
        let arrOfAds = document.querySelectorAll('.map__card');
        arrOfAds.forEach((elem) => {
            if (event.target.src == elem.children[0].src) {
                elem.classList.remove('hidden');
            };
        });
    };

    document.addEventListener('click', getsmthHandler);

})();