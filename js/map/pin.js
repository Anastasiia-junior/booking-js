//нашли контейнеры, куда будем вставлять объявления и иконки 
var conteinerForIcons = document.querySelector('.map__pins'); 

//создали фрагмент, куда в дальнейшем будем складывать иконки объявлений 
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

//запускает отрисовку объявлений по щелчку на пине    

getElementsOfIcons(ads);

conteinerForIcons.appendChild(fragmentOfIcons);