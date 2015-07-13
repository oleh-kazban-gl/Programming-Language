/**
 * @license Programming Language 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Programming-Language for details
 *
 *
 */

var keywords = require('./../core/keywords');
var utils = require('./utils');

module.exports = function (input) {
  var query = [];

  var inputSource = input.split('\r\n');

  for (var count = 0; count < inputSource.length; count++) {
    if (inputSource[count].length > 0) {
      parseString(inputSource[count]);
    }
  }

  function parseString(string) {
    if (string !== '' || utils.inputType(string) !== 'null' || utils.inputType(string) !== 'undefined') {

      if (string.charAt(0) !== '#' && string.match(/^\w*\(/).length > 0) {
        var methodCall = string.match(/^\w*\(/)[0];
        var arguments = string.match(/\((.*?)\)/)[1];

        methodCall = methodCall.substr(0, methodCall.length - 1);

        if (arguments[0] === '\'' && arguments[arguments.length - 1] === '\'') {          //Input is String
          arguments = arguments.replace(/^'|'$/g, '');

          var functionCall = {};
          functionCall[methodCall] = arguments;
          query.push(functionCall);

          //return functionCall;
        } else if (arguments[0] === '\[' && arguments[arguments.length - 1] === '\]') {   //Input is Array
          arguments = arguments.replace(/^\[|\]$/g, '').split(',');

          var output = [];

          for (var count = 0; count < arguments.length; count++) {
            if (!isNaN(parseInt(arguments[count]))) {
              if (arguments[count].indexOf('.') >= 0) {
                output.push(parseFloat(arguments[count]));
              } else {
                output.push(parseInt(arguments[count]));
              }
            } else {
              output.push(arguments[count]);
            }
          }

          var functionCall = {};
          functionCall[methodCall] = output;
          query.push(functionCall);

          //return functionCall;

        } else if (arguments.indexOf(',') >= 0) {                                  //Complex arguments
          var multiArguments = arguments.split(',');

          var functionalCall = {};
          functionalCall[methodCall] = multiArguments;

          //return methodCall + ' : ' + multiArguments;
          query.push(functionalCall);

        } else {
          console.log('arguments is NOT a simple string');

        }
      } else if (string.charAt(0) === '#' && string.charAt(1) === ' ') {                                      //Do nothing, this is comment String

      } else {
        throw new Error('Invalid entrance point');
      }
    } else {
      throw new Error('Incorrect input: ' + string);
    }
  }

  return query;
};