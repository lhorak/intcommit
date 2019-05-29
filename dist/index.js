"use strict";

var _yargs = _interopRequireDefault(require("yargs"));

var _inquirer = _interopRequireDefault(require("inquirer"));

var _defaultConfig = require("./config/defaultConfig");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_yargs["default"].scriptName('intcommit').usage('$0 [args]').option('t', {
  alias: 'type',
  demandOption: false,
  describe: 'type of commit',
  type: 'string',
  choices: _defaultConfig.typeOptions
}).option('s', {
  alias: 'scope',
  demandOption: false,
  describe: 'scope of commit',
  type: 'string'
}).option('d', {
  alias: 'description',
  demandOption: false,
  describe: 'description of commit',
  type: 'string'
}).option('b', {
  alias: 'body',
  demandOption: false,
  describe: 'optional body of commit',
  type: 'string'
}).option('f', {
  alias: 'footer',
  demandOption: false,
  describe: 'optional footer of commit',
  type: 'string'
});

var _argv$argv = _yargs["default"].argv,
    type = _argv$argv.type,
    scope = _argv$argv.scope,
    description = _argv$argv.description,
    body = _argv$argv.body,
    footer = _argv$argv.footer;
var commitMessage = "".concat(type).concat(scope ? "(".concat(scope, ")") : '', ": ").concat(description && description);
console.log("git commit -m \"".concat(commitMessage, "\""));