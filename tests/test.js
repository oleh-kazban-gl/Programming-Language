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
var environment = require('./../Glo/utils/environment');
var evaluate = require('./../Glo/utils/evaluate');

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
    it('Input in parser only string', function () {
      expect(parser("str")).to.be.ok();
      expect(function () {
        parser(function () {
        });
      }).to.throwException();
      expect(function () {
        parser(1);
      }).to.throwException();
      expect(function () {
        parser(true);
      }).to.throwException();
      expect(function () {
        parser(null);
      }).to.throwException();
      expect(function () {
        parser({});
      }).to.throwException();
      expect(function () {
        parser([]);
      }).to.throwException();
    });

    it('Input in parser "x" return { type: "word", name: "x" }', function () {
      expect(parser("x")).to.eql({type: 'word', name: 'x'});
    });

    it('Expressions "string" must be property "name"', function () {
      expect(parser("string")).to.have.property('name');
    });

    it('Expressions "number" must be property "value"', function () {
      expect(parser("1")).to.have.property('value');
    });
  });

  describe('#keywords', function () {
  });

  describe('#environment', function () {
    describe('#true', function () {
      it('Should return \'true\'', function () {
        expect(environment.true).to.equal(true);
      });

      it('Should return Boolean', function () {
        expect(utils.inputType(environment.true)).to.equal('boolean');
      });
    });

    describe('#false', function () {
      it('Should return \'false\'', function () {
        expect(environment.false).to.equal(false);
      });

      it('Should return Boolean', function () {
        expect(utils.inputType(environment.false)).to.equal('boolean');
      });
    });

    describe('#plus', function () {
      it('Should return result of adding one number to another', function () {
        expect(environment.plus(2, 3)).to.equal(5);
      });

      it('Should return Number', function () {
        expect(utils.inputType(environment.plus(2, 3))).to.equal('number');
      });
    });

    describe('#minus', function () {
      it('Should return result of subtraction of one number from another', function () {
        expect(environment.minus(10, 6)).to.equal(4);
      });

      it('Should return Number', function () {
        expect(utils.inputType(environment.minus(3, 1))).to.equal('number');
      });
    });

    describe('#multiply', function () {
      it('Should return result of multiply of one number to another', function () {
        expect(environment.multiply(10, 6)).to.equal(60);
      });

      it('Should return Number', function () {
        expect(utils.inputType(environment.multiply(3, 1))).to.equal('number');
      });
    });

    describe('#divide', function () {
      it('Should return result of dividing of one number by another', function () {
        expect(environment.divide(60, 6)).to.equal(10);
      });

      it('Should return Number', function () {
        expect(utils.inputType(environment.divide(3, 1))).to.equal('number');
      });
    });

    describe('#compare', function () {
      it('Should return result of compare of one variable to another', function () {
        expect(environment.compare(6, 6)).to.equal(true);
      });

      it('Should return Boolean', function () {
        expect(utils.inputType(environment.compare(3, 3))).to.equal('boolean');
      });
    });

    describe('#less', function () {
      it('Should return result of compare of one variable to another. Return true if first less than second', function () {
        expect(environment.less(1, 2)).to.equal(true);
      });

      it('Should return Boolean', function () {
        expect(utils.inputType(environment.less(3, 1))).to.equal('boolean');
      });
    });

    describe('#more', function () {
      it('Should return result of compare of one variable to another. Return false if first less than second', function () {
        expect(environment.more(1, 2)).to.equal(false);
      });

      it('Should return Boolean', function () {
        expect(utils.inputType(environment.more(3, 1))).to.equal('boolean');
      });
    });

    describe('#print', function () {
      it('Should print to console and return that string', function () {
        expect(environment.print('try to print me')).to.equal('try to print me');
      });

      it('Should use word \'print\'', function () {
        var spy = sinon.spy();
        environment.print(spy());

        expect(spy.called).to.equal(true);
      });
    });

    describe('#module', function () {
      it('Should return an absolute number value', function () {
        expect(environment.module(-3)).to.equal(3);
      });

      it('Should return Number', function () {
        expect(utils.inputType(environment.module(-100))).to.equal('number');
      })
    });

    describe('#random', function () {
      it('Should return random Number', function () {
        expect(utils.inputType(environment.random(0, 100))).to.equal('number');
      });
    });

    describe('#array', function () {
      it('Should return an Array', function () {
        expect(utils.inputType(environment.array())).to.equal('array');
      });

    });

    describe('#length', function () {
      it('Should return a Number - length of passed Array', function () {
        expect(environment.length([10])).to.equal(1);
      });

      it('Should return Number', function () {
        expect(utils.inputType(environment.length([]))).to.equal('number');
      });
    });

    describe('#element', function () {
      it('Should return an element by index from assigned Array', function () {
        expect(environment.element([1, 2, 3], 2)).to.equal(3);
      })
    });
  });

  describe('#loader', function () {
    it('Should load source file and return a String', function () {
      expect(loader.load()).to.be.a('string');
    });
  });

});