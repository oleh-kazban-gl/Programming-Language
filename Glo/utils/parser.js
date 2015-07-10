/**
 * @license Programming Language 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Programming-Language for details
 *
 *
 */

var keywords = require('./../core/keywords');

module.exports = function (input) {
  var query = [];

  var inputSource = input.split('\r\n');

  for (var count = 0; count < inputSource.length; count++) {
    parseString(inputSource[count]);
  }

  function parseString(string) {
    if (string !== '' || string !== null || string !== undefined) {

      if (string.match(/^\w*\(/).length > 0) {
        var methodCall = string.match(/^\w*\(/)[0];
        var arguments = string.match(/\((.*?)\)/)[1];

        methodCall = methodCall.substr(0, methodCall.length - 1);

        if (arguments[0] === '\'' && arguments[arguments.length - 1] === '\'') {
          arguments = arguments.replace(/^'|'$/g, '');

          var functionCall = {};
          functionCall[methodCall] = arguments;
          query.push(functionCall);

          return methodCall + ' : ' + arguments;
        } else {
          console.log('arguments is NOT a simple string');
        }
      } else {
        throw new Error('Invalid entrance point');
      }
    }
  }

  return query;
};