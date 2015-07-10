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
 */

var utils = require('./../utils/utils');

module.exports = {

  /**
   * Print input to console
   * @param {String|Array|Object} - accept and parse any type of data
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
  }
};