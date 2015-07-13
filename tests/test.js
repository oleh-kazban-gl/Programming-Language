/**
 * @license Programming Language 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Programming-Language for details
 *
 * Actions: here defined all possible actions for entity
 */

var expect = require('expect.js');
var sinon = require('sinon');

var parser = require('./../Glo/utils/parser');
var utils = require('./../Glo/utils/utils');
var keywords = require('./../Glo/core/keywords');
var loader = require('./../loader');

describe('Programming Language', function () {
  describe('#Glo/Utils/Utils/inputType()', function () {
    it('Should return String type', function () {
      expect(utils.inputType('print')).to.be.a('string');
    });

    it('Should return \'string\' if input is String', function () {
      expect(utils.inputType('print')).to.equal('string');
    });

    it('Should return \'number\' if input is Integer', function () {
      expect(utils.inputType(123)).to.equal('number');
    });

    it('Should return \'number\' if input is Float', function () {
      expect(utils.inputType(7.62)).to.equal('number');
    });

    it('Should return \'boolean\' if input is Boolean (true)', function () {
      expect(utils.inputType(true)).to.equal('boolean');
    });

    it('Should return \'boolean\' if input is Boolean (false)', function () {
      expect(utils.inputType(false)).to.equal('boolean');
    });

    it('Should return \'array\' if input is an Array', function () {
      expect(utils.inputType([123, 234])).to.equal('array');
    });

    it('Should return \'object\' if input is an Object', function () {
      expect(utils.inputType({1: 'name'})).to.equal('object');
    });

    it('Should return \'null\' if input is an Null', function () {
      expect(utils.inputType(null)).to.equal('null');
    });

    it('Should return \'undefined\' if input is an Undefined', function () {
      expect(utils.inputType(undefined)).to.equal('undefined');
    });

    it('Should throw an Error if input is empty', function () {
      expect(function () {
        utils.inputType();
      }).to.throwError('Empty input!');
    });
  });

  describe('#Glo/Utils/Parser', function () {
    it('Should return an Array', function () {
      expect(parser('print(\'Hello\')')).to.be.a('array');
    });

    it('Each cell of returned Array is an Object, with name of calling function ' +
      'as field key and array or string of arguments', function () {
      expect(parser('print(\'Hello\')')[0]).to.be.a('object');
    });

    it('Should start function calling from keyword', function () {
      var testObject = parser('print(\'Hello\')')[0];

      expect(testObject.hasOwnProperty('print')).to.equal(true);
    });

    it('Should return a simple String if argument is String', function () {
      var testObject = parser('print(\'Hello\')')[0];

      expect(testObject['print']).to.be.a('string');
    });

    it('Should return an expected String as argument', function () {
      var testObject = parser('print(\'Hello\')')[0];

      expect(testObject['print']).to.equal('Hello');
    });

    it('Should return an Array of expected size if are multiple calls in source file', function () {
      var source = loader.load();
      var output = parser(source);

      expect(output.length).to.above(0);
    });

    it('Should return an Array if input for keyword is [a, b, c] construction', function () {
      var testObject = parser('print([1,2,3])')[0];
      expect(utils.inputType(testObject['print'])).to.equal('array');
    });

    it('Should parse and return according type of cells: ' +
      'if input can be parsed as number and has decimal point - it is Float', function () {
      var testObject = parser('print([7.62])')[0];
      expect(parseFloat(testObject['print'][0])).to.equal(7.62);
    });

    it('Should parse and return according type of cells: ' +
      'if input can be parsed as number and has not decimal point - it is Integer', function () {
      var testObject = parser('print([762])')[0];
      expect(parseFloat(testObject['print'][0])).to.equal(762);
    });

    it('Should parse and return according type of cells: ' +
      'if input can not be parsed as numbers - it is String', function () {
      var testObject = parser('print(\'762\')')[0];
      expect(testObject['print']).to.be.a('string');
    });
  });


  describe('#keywords', function () {
    describe('#print()', function () {
      it('Should use print keyword', function () {
        var spy = sinon.spy();
        keywords.print(spy());

        expect(spy.called).to.equal(true);
      });
    });

    describe('#module()', function () {
      it('Should use module keyword', function () {
        var spy = sinon.spy();
        keywords.module(spy());

        expect(spy.called).to.equal(true);
      });

      it('Should return a Number', function () {
        expect(utils.inputType(keywords.module(762))).to.equal('number');
      });

      it('Should return a Float if input has decimal point', function () {
        expect(keywords.module(7.62)).to.equal(7.62);
      });

      it('Should return an Integer if input has not decimal point', function () {
        expect(keywords.module(762)).to.equal(762);
      });

      it('Should return an absolute value of Number', function () {
        expect(keywords.module(-762)).to.equal(762);
      });

      it('Should throw an Error if input is not a Number and show incorrect input', function () {
        expect(function () {
          keywords.module('try to test me :)');
        }).to.throwError('Incorrect input type: try to test me :)');
      });

      it('Should return Null if input is Null', function () {
        expect(utils.inputType(keywords.module(null))).to.equal('null');
      });

      it('Should return Undefined if input is Undefined', function () {
        expect(utils.inputType(keywords.module(undefined))).to.equal('undefined');
      });
    });

    describe('#add()', function () {
      it('Should return an Integer if input is Integer', function () {
        expect(keywords.add(3, 4)).to.equal(7);
      });

      it('Should return an Float if one of input Numbers is Float', function () {
        expect(keywords.add(1.22, 4)).to.equal(5.22);
      });

      it('Should return a Number if both inputs are numbers', function () {
        expect(utils.inputType(keywords.add(1.22, 7.62))).to.equal('number');
      });

      it('Should return a String if one of inputs is String', function () {
        expect(utils.inputType(keywords.add('my favourite calibre is ', 7.62))).to.equal('string');
      });

      it('Should return a Null if one of inputs is Null', function () {
        expect(utils.inputType(keywords.add(null, 7.62))).to.equal('null');
      });

      it('Should return a Undefined if one of inputs is Undefined', function () {
        expect(utils.inputType(keywords.add(undefined, 7.62))).to.equal('undefined');
      });

      it('Should throw an Error if input type is incorrect', function () {
        expect(function () {
          keywords.add(3, {1: '1'});
        }).to.throwError();
      });
    });

    describe('#minus()', function () {
      it('Should accept numbers', function () {
        expect(keywords.minus(10, 5)).to.equal(5);
      });

      it('Should return Number', function () {
        expect(utils.inputType(keywords.minus(10, 5))).to.equal('number');
      });

      it('Should return Float if one of inputs is Float', function () {
        expect(keywords.minus(10.62, 1)).to.equal(9.62);
      });

      it('Should return Integer if both of inputs Are Integers', function () {
        expect(keywords.minus(10, 1)).to.equal(9);
      });

      it('Should return Null if one of inputs is Null', function () {
        expect(utils.inputType(keywords.minus(null, 2))).to.equal('null');
      });

      it('Should return Undefined if one of inputs is Undefined', function () {
        expect(utils.inputType(keywords.minus(undefined, 2))).to.equal('undefined');
      });

      it('Should throw an Error if one of inputs is not Number', function () {
        expect(function () {
          keywords.minus('try to minus', 3);
        }).to.throwError('Incorrect input types: try to minus 3');
      });
    });

    describe('#multiply()', function () {
      it('Should accept numbers', function () {
        expect(keywords.multiply(2, 3)).to.equal(6);
      });

      it('Should return Number', function () {
        expect(utils.inputType(keywords.multiply(2, 3))).to.equal('number');
      });

      it('Should return Float', function () {
        expect(keywords.multiply(1, 1.1)).to.equal(1.1);
      });

      it('Should return Integer', function () {
        expect(keywords.multiply(2, 4)).to.equal(8);
      });

      it('Should return Null if one of inputs is Null', function () {
        expect(utils.inputType(keywords.multiply(null, 2))).to.equal('null');
      });

      it('Should return Undefined if one of inputs is Undefined', function () {
        expect(utils.inputType(keywords.multiply(undefined, 2))).to.equal('undefined');
      });

      it('Should throw an Error if one of inputs is not Number', function () {
        expect(function () {
          keywords.multiply('try to multiply', 4);
        }).to.throwError('Incorrect input types: try to multiply 4');
      });
    });

    describe('#divide()', function () {
      it('Should accept numbers', function () {
        expect(keywords.divide(6, 2)).to.equal(3);
      });

      it('Should return Number', function () {
        expect(utils.inputType(keywords.divide(6, 2))).to.equal('number');
      });

      it('Should return Float', function () {
        expect(keywords.divide(1.1, 1)).to.equal(1.1);
      });

      it('Should return Integer', function () {
        expect(keywords.divide(12, 6)).to.equal(2);
      });

      it('Should return Null if one of inputs is Null', function () {
        expect(utils.inputType(keywords.divide(null, 2))).to.equal('null');
      });

      it('Should return Undefined if one of inputs is Undefined', function () {
        expect(utils.inputType(keywords.divide(undefined, 2))).to.equal('undefined');
      });

      it('Should throw an Error if one of inputs is not Number', function () {
        expect(function () {
          keywords.divide('try to divide me', 3);
        }).to.throwError('Incorrect input types: try to divide me 3');
      });
    });

    describe('#random()', function () {
      it('Should accept numbers', function () {
        expect(keywords.random(0, 100)).to.be.above(0);
      });

      it('Should return Number', function () {
        expect(utils.inputType(keywords.random(0, 10))).to.equal('number');
      });

      it('Should return Float', function () {
        expect(utils.inputType(keywords.random(1.1, 2.2))).to.equal('number');
      });

      it('Should return Integer', function () {
        expect(utils.inputType(keywords.random(1, 2))).to.equal('number');
      });

      it('Should return Null if one of inputs is Null', function () {
        expect(utils.inputType(keywords.random(null, 2.2))).to.equal('null');
      });

      it('Should return Undefined if one of inputs is Undefined', function () {
        expect(utils.inputType(keywords.random(undefined, 2.2))).to.equal('undefined');
      });

      it('Should throw an Error if one of inputs is not Number', function () {
        expect(function () {
          keywords.random('random', 3)
        }).to.throwError('Incorrect input types: random 3');
      });
    });


  });

  describe('#loader', function () {
    it('Should load source file and return a String', function () {
      expect(loader.load()).to.be.a('string');
    });
  });

});