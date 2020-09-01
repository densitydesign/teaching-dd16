/***************************************************************************************************************************************************************
 *
 * Display various cli options
 *
 * DisplayHelp    - Display the help
 * DisplayVersion - Display the version of cuttlebelle
 * DisplayWelcome - Display the welcome message
 *
 **************************************************************************************************************************************************************/
'use strict'; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

var _interopRequireDefault3 = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireDefault2 = _interopRequireDefault3(require("@babel/runtime/helpers/interopRequireDefault"));

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisplayWelcome = exports.DisplayVersion = exports.DisplayHelp = undefined;

var _windowSize = require("window-size");

var _windowSize2 = (0, _interopRequireDefault2.default)(_windowSize);

var _fs = require("fs");

var _fs2 = (0, _interopRequireDefault2.default)(_fs);

var _helper = require("./helper");

var _path = require("./path");

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Local
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Our own package.json
 *
 * @type {object}
 */
const pkg = require('../package.json');
/**
 * Display the help
 */


const DisplayHelp = exports.DisplayHelp = () => {
  const maxLength = 80;
  const paddingSize = Math.max(0, Math.floor((_windowSize2.default.width - maxLength) / 2));
  const padding = ` `.repeat(paddingSize);

  _helper.Log.space();

  console.log(`
${padding}╔═╗ ╦ ╦ ╔╦╗ ╔╦╗ ╦   ╔═╗ ╔╗  ╔═╗ ╦   ╦   ╔═╗
${padding}║   ║ ║  ║   ║  ║   ║╣  ╠╩╗ ║╣  ║   ║   ║╣
${padding}╚═╝ ╚═╝  ╩   ╩  ╩═╝ ╚═╝ ╚═╝ ╚═╝ ╩═╝ ╩═╝ ╚═╝ v${pkg.version}

${padding}The react.js static site generator with editing in mind.

${padding}Options:
${padding}                - Building all pages
${padding}  ${_helper.Style.gray(`$`)} ${_helper.Style.yellow(_helper.Style.bold(`cuttlebelle`))}

${padding}  ${_helper.Style.bold(`init`)}          - Create a clean slate website to get you started
${padding}                - Shortcut: ${_helper.Style.yellow(_helper.Style.bold(`-i`))}
${padding}  ${_helper.Style.gray(`$`)} ${_helper.Style.yellow(_helper.Style.bold(`cuttlebelle init`))}

${padding}  ${_helper.Style.bold(`docs`)}          - Build documentation from your layout components
${padding}                - Shortcut: ${_helper.Style.yellow(_helper.Style.bold(`-d`))}
${padding}  ${_helper.Style.gray(`$`)} ${_helper.Style.yellow(_helper.Style.bold(`cuttlebelle docs`))}

${padding}  ${_helper.Style.bold(`watch`)}         - Start to watch the content and source folder for changes
${padding}                - Shortcut: ${_helper.Style.yellow(_helper.Style.bold(`-w`))}
${padding}  ${_helper.Style.gray(`$`)} ${_helper.Style.yellow(_helper.Style.bold(`cuttlebelle watch`))}

${padding}  ${_helper.Style.bold(`--no-generate`)} - Disable generation of all pages, best in combination with watch
${padding}                - Shortcut: ${_helper.Style.yellow(_helper.Style.bold(`-n`))}
${padding}  ${_helper.Style.gray(`$`)} ${_helper.Style.yellow(_helper.Style.bold(`cuttlebelle watch --no-generate`))}

${padding}  ${_helper.Style.bold(`--silent`)}      - Disable all notifications the watch might throw
${padding}                - Shortcut: ${_helper.Style.yellow(_helper.Style.bold(`-s`))}
${padding}  ${_helper.Style.gray(`$`)} ${_helper.Style.yellow(_helper.Style.bold(`cuttlebelle watch --silent`))}

${padding}  ${_helper.Style.bold(`--version`)}     - Display the version of Cuttlebelle
${padding}                - Shortcut: ${_helper.Style.yellow(_helper.Style.bold(`-V`))} ${_helper.Style.gray('(uppercased)')}
${padding}  ${_helper.Style.gray(`$`)} ${_helper.Style.yellow(_helper.Style.bold(`cuttlebelle --version`))}

${padding}  ${_helper.Style.bold(`--verbose`)}     - Enable silly verbose mode
${padding}                - Shortcut: ${_helper.Style.yellow(_helper.Style.bold(`-v`))}
${padding}  ${_helper.Style.gray(`$`)} ${_helper.Style.yellow(_helper.Style.bold(`cuttlebelle --verbose`))}

${padding}  ${_helper.Style.gray(pkg.homepage)}
`);

  _helper.Log.space();

  process.exit(0);
};
/**
 * Display the version of cuttlebelle
 */


const DisplayVersion = exports.DisplayVersion = () => {
  console.log(`Cuttlebelle v${pkg.version}`);
  process.exit(0);
};
/**
 * Display the welcome message
 */


const DisplayWelcome = exports.DisplayWelcome = () => {
  _helper.Log.welcome(`Cuttlebelle v${pkg.version}`);
};