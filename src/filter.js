'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.filterLongWords = void 0;
const filterLongWords = function (words, minLength) {
  return words.filter(word => {
    return word.length > minLength;
  });
};
exports.filterLongWords = filterLongWords;
