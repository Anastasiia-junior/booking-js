'use strict';
(function () {
    //находим шаблон пина 
    let similarIconTemplate = document.querySelector('template').content.querySelector('.map__pin');

    //нашли контейнер, куда будем вставлять иконки 
    let conteinerForIcons = document.querySelector('.map__pins');

    //создали фрагмент, куда в дальнейшем будем складывать иконки объявлений 
    var fragmentOfIcons = document.createDocumentFragment();

    var getElementsOfIcons = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            var iconElement = similarIconTemplate.cloneNode(true);
            iconElement.style.left = `${arr[i].location.x}px`;
            iconElement.style.top = `${arr[i].location.y - 44}px`;
            iconElement.querySelector('img').src = arr[i].author.avatar;

            fragmentOfIcons.appendChild(iconElement);
        };
    };

    getElementsOfIcons(ads);

    conteinerForIcons.appendChild(fragmentOfIcons);

    window.arrOfIcons = document.querySelectorAll('.map__pin');

    arrOfIcons.forEach(elem => elem.classList.add('hidden'));

    //костыль чтобы не пропал главный пин, нужно переделать
    document.querySelector('.map__pin--main').classList.remove('hidden');

})();