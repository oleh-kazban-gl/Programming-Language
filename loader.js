/**
 * @license Programming Language 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Programming-Language for details
 *
 *
 */

var parse = require('./Glo/utils/parser');
var keywords = require('./Glo/core/keywords');
var compile = require('./Glo/utils/compiler');

var path = './program';

module.exports = {
  run: function() {
    var source = module.exports.load();
    var parsedSource = parse(source);

    compile(parsedSource);
  },

  load: function() {
    var fs = require('fs');
    var source = fs.readFileSync(path, "utf8");

    return source;
  }
};

module.exports.run();
