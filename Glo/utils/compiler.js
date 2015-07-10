/**
 * @license Programming Language 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Programming-Language for details
 *
 * @param (Array)
 */

var keyword = require('./../core/keywords');

function execute(func, args) {
  switch(func) {
    case 'print': keyword.print(args)
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