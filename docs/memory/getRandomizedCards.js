(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.getRandomizedCards = factory());
})(this, (function () { 'use strict';

  const characterArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
  function getRandomizedCards(numberOfPairs, randomize = true) {
    const letters = [];
    for(let i = 0; i < numberOfPairs && i < characterArray.length; i++) {
      letters.push(characterArray[i],characterArray[i]);
    }

    if (randomize) {
      shuffle(letters);
    }

    return letters;
  }


  function shuffle(array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  }

  return getRandomizedCards;

}));
