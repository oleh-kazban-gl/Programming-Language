/**
 * @license Programming Language 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Programming-Language for details
 *
 *
 */

var evaluate = require('./Glo/utils/evaluate');
var environment = require('./Glo/utils/environment');
var parse = require('./Glo/utils/parser');

var path = './program';

module.exports = {
  run: function() {
    var env = Object.create(environment);
    var program = Array.prototype.slice
      .call(arguments, 0).join('\n');

    return evaluate(parse(program), env);
  },

  load: function() {
    var fs = require('fs');
    var source = fs.readFileSync(path, "utf8");

    return source;
  }
};

var program = module.exports.load();

module.exports.run(program);