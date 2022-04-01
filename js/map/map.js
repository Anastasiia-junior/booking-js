'use strict';


//активируем поле карты

var blockMap = document.querySelector('.map');

blockMap.classList.remove('map--faded');


/*запускает отрисовку объявлений на странице */


pinActivate.addEventListener('mouseup', pinMouseupHandler); 

/*добавляет отрисовку информации по объявлению при нажатии на значок пина объявления */
 

function getsmthHandler(event) {
    let arrOfAds = document.querySelectorAll('.map__card');
    arrOfAds.forEach((elem) => {
        if (event.target.src == elem.children[0].src){
            elem.classList.remove('hidden');
        };
    });     
};

document.addEventListener('click', getsmthHandler);




