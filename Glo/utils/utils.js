/**
 * @license Programming Language 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Programming-Language for details
 *
 *
 */

module.exports = {
  /**
   * Utility function to determine of input type of object
   * @param {Array | Object | String | Number | Boolean | null | undefined} Accept any type of object
   * @return {String} null: if input is null
   * @return {String} undefined: if input is undefined
   * @return {String} number: if input is integer or float (number)
   * @return {String} string: if input is string
   * @return {String} boolean: if input is boolean
   * @return {String} array: if input is array
   * @return {String} object: if input is object
   */

  inputType: function (input) {
    if (module.exports.inputType.arguments.length > 0) {
      var result = Object.prototype.toString.call(input).toUpperCase();

      result = result.substring(1, result.length - 1);
      result = result.replace(/^OBJECT\s/, '').toLowerCase();

      return result;
    } else {
      throw new Error('Empty input!');
    }
  }
};
