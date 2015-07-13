/**
 * @license Programming Language 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Programming-Language for details
 *
 * @param (Array)
 */

var keyword = require('./../core/keywords');

function execute(func, args) {
  switch (func) {
    case 'print':
      keyword.print(args);
      break;
    case 'loop':
      keyword.loop(args);
      break;
    case 'condition':
      keyword.condition(args);
      break;
    case 'regexp':
      keyword.regexp(args);
      break;
    case 'module':
      keyword.module(args);
      break;
    case 'add':
      keyword.add(args);
      break;
    case 'minus':
      keyword.minus(args);
      break;
    case 'multiply':
      keyword.multiply(args);
      break;
    case 'divide':
      keyword.divide(args);
      break;
    case 'random':
      keyword.random(args);
      break;
    default:
      throw new Error('Unknown command identifier');
  }
}

module.exports = function (input) {

  for (var count = 0; count < input.length; count++) {
    for (var objectProperty in input[count]) {
      if (input[count].hasOwnProperty(objectProperty)) {
        var func = objectProperty;
        var args = input[count][objectProperty];

        execute(func, args);
      }
    }
  }
};