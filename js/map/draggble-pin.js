'use strict'; 
    
/*добавляем перетаскивание главного пина по карте */
(function dragPin () {
    
    let draggablePin = document.querySelector('.map__pin--main');
    
    draggablePin.addEventListener('mousedown', function(evt) {
        evt.preventDefault();

        let startCoordinates = {
            x: evt.clientX,
            y: evt.clientY,
        }

        let onMouseMove = function (moveEvt) {
            moveEvt.preventDefault();
    
            let shift = {
                x: startCoordinates.x - moveEvt.clientX,
                y: startCoordinates.y - moveEvt.clientY,
            };
    
            startCoordinates = {
                x: moveEvt.clientX,
                y: moveEvt.clientY,
            };

            draggablePin.style.top = (draggablePin.offsetTop - shift.y) + 'px';
            draggablePin.style.left = (draggablePin.offsetLeft - shift.x) + 'px';
        };

        let onMouseUp = function (upEvt) {
            upEvt.preventDefault();

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
    
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });    

})();
