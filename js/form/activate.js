'use strict';

(function () {
    /* добавляем активацию формы по событию нажатия на пин */
    let pinActivate = document.querySelector('.map__pin--main');


    //обработчик события 
    let pinMouseupHandler = function (event) {

        //активирует поля формы по щелчку на пине
        document.querySelector('.notice__form').querySelectorAll('fieldset').forEach(elem => elem.disabled = false);

        //подставляет координаты пина в поле адреса
        document.querySelector('#address').value = `${Math.floor(pinCoordinate.left)} ` + `${Math.floor(pinCoordinate.top) + pinActivate.scrollHeight}`;
   
        arrOfIcons.forEach(elem => elem.classList.remove('hidden'));
    };

    pinActivate.addEventListener('mouseup', pinMouseupHandler);
})();