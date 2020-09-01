/***************************************************************************************************************************************************************
 *
 * Getting infos from our site
 *
 * GetType      - Get an array of paths recursively from a folder
 * GetContent   - Get all content folders recursively
 * GetPartials  - Get all partial files recursively
 * GetLayout    - Get all layout files recursively
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
exports.GetLayout = exports.GetPartials = exports.GetContent = exports.GetType = undefined;

var _fs = require("fs");

var _fs2 = (0, _interopRequireDefault2.default)(_fs);

var _helper = require("./helper");

var _settings = require("./settings");

var _path = require("./path");

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Local
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Get all folders recursively that meet a condition
 *
 * @param  {string}   folder     - The start folder we search in
 * @param  {function} condition  - A function to find the right type of file
 * @param  {function} format     - A function to format the paths
 * @param  {array}    files      - We keep track of what we found so far to recursively find all folders
 *
 * @return {array}               - An array of all paths
 */
const GetType = exports.GetType = (folder, condition, format, files = []) => {
  if (_fs2.default.existsSync(folder)) {
    _fs2.default.readdirSync(folder) // starting from this level
    .map(file => {
      // iterate over all files
      if (_fs2.default.statSync(_path.Path.join(folder, file)).isDirectory()) {
        // if this is a directory we just call ourself again
        files = [...GetType(_path.Path.join(folder, file), condition, format, files)]; // and spread the result into our array
      } else {
        if (condition(file)) {
          // let’s see if we include this file
          _helper.Log.verbose(`Found type in ${_helper.Style.yellow(_path.Path.join(folder, file))}`);

          files.push(format(folder, file));
        }
      }
    });

    return files;
  } else {
    return null;
  }
};
/**
 * Get all folders that have the index.yml (or whatever SETTINGS.folder.index says)
 *
 * @param  {string}  folder  - The start folder we search in
 *
 * @return {array}           - An array of all relative paths that should be pages we need to generate
 */


const GetContent = exports.GetContent = (folder = _settings.SETTINGS.get().folder.content) => {
  const condition = file => file === `${_settings.SETTINGS.get().folder.index}.yml`;

  const replacePathString = _path.Path.normalize(_settings.SETTINGS.get().folder.cwd + folder.replace(_settings.SETTINGS.get().folder.cwd, ''));

  const format = (folder, _) => folder.replace(replacePathString, '');

  const files = GetType(folder, condition, format);

  if (files === null) {
    _helper.Log.info(`No content found in ${_helper.Style.yellow(folder)}`);
  } else {
    return files;
  }
};
/**
 * Get all partials from all content folders
 *
 * @param  {string}  folder  - The start folder we search in
 *
 * @return {array}           - An array of all relative paths of all partials
 */


const GetPartials = exports.GetPartials = (folder = _settings.SETTINGS.get().folder.content) => {
  const condition = file => file.endsWith('.md');

  const replacePathString = _path.Path.normalize(_settings.SETTINGS.get().folder.cwd + folder.replace(_settings.SETTINGS.get().folder.cwd, ''));

  const format = (folder, file) => _path.Path.join(folder, file).replace(replacePathString, '');

  const files = GetType(folder, condition, format);

  if (files === null) {
    _helper.Log.info(`No partials found in ${_helper.Style.yellow(folder)}`);
  } else {
    return files;
  }
};
/**
 * Get all layout files recursively
 *
 * @param  {string}  folder  - The start folder we search in
 *
 * @return {array}           - An array of all relative paths that we see as layouts
 */


const GetLayout = exports.GetLayout = (folder = _settings.SETTINGS.get().folder.code) => {
  const condition = file => _path.Path.extname(file) === '.js';

  const replacePathString = _path.Path.normalize(_settings.SETTINGS.get().folder.cwd + folder.replace(_settings.SETTINGS.get().folder.cwd, ''));

  const format = (folder, file) => _path.Path.join(folder, file).replace(replacePathString, '');

  const files = GetType(folder, condition, format);

  if (files === null) {
    _helper.Log.info(`No react source found in ${_helper.Style.yellow(folder)}`);
  } else {
    return files;
  }
};