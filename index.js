'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.hello = hello;
const world = 'world!!!!';
function hello(who = world) {
  return `Hello ${who}! `;
}
console.log(hello());
console.log(hello('edwin'));
