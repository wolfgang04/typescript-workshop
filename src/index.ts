import {sqaureNumber} from './map';
import {filterLongWords} from './filter';
import {printFruits} from './forEach';
import {sliceString} from './slice';

console.log('Try npm run lint/fix!');

const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';

const trailing = 'Semicolon';

const why = {am: 'I tabbed?'};

const iWish = "I didn't have a trailing space...";

const sicilian = true;

const vizzini = sicilian ? !sicilian : sicilian;

const re = /foo {3}bar/;

export function doSomeStuff(
  withThis: string,
  andThat: string,
  andThose: string[]
) {
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
console.log(sqaureNumber(numbers));

// Sample data for filter.ts
const words: string[] = ['hello', 'world', 'typescript', 'is', 'awesome'];
const minLength = 5;

const longWords: string[] = filterLongWords(words, minLength);

console.log(longWords);

// Sample data for forEach.ts
const fruits: string[] = ['Apple', 'Orange', 'Grapes', 'Mango', 'Pineapple'];
printFruits(fruits);

// Sample data for slice.ts
const str = 'hikhok';
const slicedhikhok: string = sliceString(str, 0, 3);
console.log(slicedhikhok);
