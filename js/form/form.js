
//деактивируем поля формы 
document.querySelector('.notice__form').querySelectorAll('fieldset').forEach(elem => elem.disabled = true);

// подставляет в поле адреса адрес пина до начала работы с картой
let pinCoordinate = document.querySelector('.map__pin--main').getBoundingClientRect();
document.querySelector('#address').value = `${pinCoordinate.left} `+`${pinCoordinate.top}`;

/* добавляем активацию формы по событию нажатия на пин */
let pinActivate = document.querySelector('.map__pin--main');


let pinMouseupHandler = function (event) { 

//активирует поля формы по щелчку на пине
    document.querySelector('.notice__form').querySelectorAll('fieldset').forEach(elem => elem.disabled = false);

//подставляет координаты пина в поле адреса
    document.querySelector('#address').value = `${Math.floor(pinCoordinate.left)} `+`${Math.floor(pinCoordinate.top)+pinActivate.scrollHeight}`;
    