'use strict';

//получает рандомное число в заданном диапазоне от min до max
var getRandomArbitrary = function (min, max) {
    return Math.floor( Math.random() * (max - min) + min) ;
  };