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

  return query;

  /**
   * Function is used for parsing source String
   */

  function parseString(string) {
    if (string !== '' ||
      utils.inputType(string) !== 'null' ||
      utils.inputType(string) !== 'undefined') {

      //Skip commented String - the '# ' signature
      if (string.charAt(0) === '#' && string.charAt(1) === ' ') {
      }

      //Search for operator occurrence operator(argument)
      else if (string.match(/^\w*\(/).length > 0) {
        var methodCall;
        var arguments;

        methodCall = string.match(/^\w*\(/)[0];
        methodCall = methodCall.substring(0, methodCall.length - 1);
        arguments = string.match(/\((.*?)\);/)[1];

        //Search for internal calls
        //if (arguments.match(/^\w*\(/).length > 0) {
        //
        //}

        var functionCall = {};

        //If argument is not internal call - what is in argument?

        //Argument is simple String
        if (arguments.charAt(0) === '\'' && arguments.charAt(arguments.length - 1) === '\'') {
          arguments = arguments.substring(1, arguments.length - 1);

          //Argument is a String of different arguments separated by coma ','
          if (arguments.indexOf('\',\'') >= 0) {
            var strings = arguments.split('\',\'');

            //Restore original types of cells
            for (var count = 0; count < strings.length; count++) {
              strings[count] = restoreEntity(strings[count]);
            }

            functionCall[methodCall] = strings;
          } else {
            functionCall[methodCall] = arguments;
          }
        }


        //Argument is an Array


        query.push(functionCall);
      }
    }
  }

  /**
   * Function is used for restoring of original primitives
   */

  function restoreEntity(entity) {
    //Looking for dots - entity can be String or Float
    if (entity.indexOf('.') >= 0) {
      if (!isNaN(parseFloat(entity))) {
        //Successfully converted to Float
        return parseFloat(entity);
      } else {
        //Entity contains a dot, but convert failed, so it is a String
        return entity;
      }

      //Entity doesn't contain dots - so it is either String without dots or Integer
    } else {
      if (!isNaN(parseInt(entity))) {
        //Successfully converted to Float
        return parseInt(entity);
      } else {
        //Entity doesn't contain a dot, but convert failed, so it is a String
        return entity;
      }
    }
  }
};


