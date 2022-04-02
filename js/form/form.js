'use strict';

    (function () {
        //деактивируем поля формы 
        document.querySelector('.notice__form').querySelectorAll('fieldset').forEach(elem => elem.disabled = true);

        // подставляет в поле адреса адрес пина до начала работы с картой
        window.pinCoordinate = document.querySelector('.map__pin--main').getBoundingClientRect();
        document.querySelector('#address').value = `${pinCoordinate.left} ` + `${pinCoordinate.top}`;

    })();



