/**
 * @license Programming Language 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Programming-Language for details
 *
 *
 */

/*
 primitives:
 int
 float
 boolean

 control structures:
 loop: loop(init, boundary, step)
 condition: condition(true) {}

 data structures:
 variables
 arrays
 objects

 built-in methods:
 print: print('Hello World!') - prints to console 'Hello World!'
 loop

 If String begins from symbol'#' this is a comment

 */

var utils = require('./../utils/utils');

module.exports = {

  /**
   * Print input to console
   * @param {String|Array} - accept and parse any simple one dimensional Arrays or Strings
   */

  print: function (input) {
    console.log(parsePrintInput(input));

    function parsePrintInput(input, indent) {
      if (indent === undefined) {
        indent = '';
      }

      if (utils.inputType(input) === 'array') {
        var data = '';

        for (var count = 0; count < input.length; count++) {
          data += indent + 'cell #' + count + '\t: \t';

          if (utils.inputType(input[count]) === 'object' ||
            utils.inputType(input[count]) === 'array') {
            data += '\n' + parsePrintInput(input[count], indent + '\t');
          } else {
            data += input[count];
          }

          if (count != input.length - 1) {
            data += '\n';
          }
        }

        return data;
      } else if (utils.inputType(input) === 'object') {
        var data = '';

        for (var objectProperty in input) {
          if (input.hasOwnProperty(objectProperty)) {
            data += indent + objectProperty + '\t : ';
            if (utils.inputType(input[objectProperty]) === 'object' ||
              utils.inputType(input[objectProperty]) === 'array') {
              data += '\n' + parsePrintInput(input[objectProperty], indent + '\t');
            } else {
              data += input[objectProperty] + '\n';
            }
          }
        }

        return data;
      } else {
        return input;
      }
    }
  },

  loop: function (start, condition, increment) {
  },

  condition: function (condition) {
  },

  regexp: function (x, func) {
  },

  /**
   * Return an absolute value of number
   * @param {Number}
   */

  module: function (x) {
    if (utils.inputType(x) === 'null') {
      return null;
    } else if (utils.inputType(x) === 'undefined') {
      return undefined;
    } else if (!isNaN(Math.abs(x))) {
      return Math.abs(x);
    } else {
      throw new Error('Incorrect input type: ' + x);
    }
  },

  add: function (x, y) {
  },

  minus: function (x, y) {
  },

  multiply: function (x, y) {
  },

  divide: function (x, y) {
  },

  random: function (min, max) {
  }
};