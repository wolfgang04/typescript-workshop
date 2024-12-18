'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.doSomeStuff = doSomeStuff;
const map_1 = require('./map');
const filter_1 = require('./filter');
const forEach_1 = require('./forEach');
const slice_1 = require('./slice');
console.log('Try npm run lint/fix!');
const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';
const trailing = 'Semicolon';
const why = {am: 'I tabbed?'};
const iWish = "I didn't have a trailing space...";
const sicilian = true;
const vizzini = sicilian ? !sicilian : sicilian;
const re = /foo {3}bar/;
function doSomeStuff(withThis, andThat, andThose) {
  //function on one line
  if (!andThose.length) {
    return false;
  }
  console.log(withThis);
  console.log(andThat);
  console.dir(andThose);
  console.log(longString, trailing, why, iWish, vizzini, re);
  return;
}
// TODO: more examples
//Sample data for map.ts
const numbers = [20, 10, 6, 5, 69];
console.log((0, map_1.sqaureNumber)(numbers));
// Sample data for filter.ts
const words = ['hello', 'world', 'typescript', 'is', 'awesome'];
const minLength = 5;
const longWords = (0, filter_1.filterLongWords)(words, minLength);
console.log(longWords);
// Sample data for forEach.ts
const fruits = ['Apple', 'Orange', 'Grapes', 'Mango', 'Pineapple'];
(0, forEach_1.printFruits)(fruits);
// Sample data for slice.ts
const str = 'hikhok';
const slicedhikhok = (0, slice_1.sliceString)(str, 0, 3);
console.log(slicedhikhok);
