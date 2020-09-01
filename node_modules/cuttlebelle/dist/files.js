/***************************************************************************************************************************************************************
 *
 * Interact with the file system
 *
 * ReadFile   - Promisified reading a file
 * CreateFile - Promisified writing a file
 * CreateDir  - Create a path if it doesn’t exist
 * RemoveDir  - Removing folders and all it’s sub folders
 * CopyFiles  - Copy a folder
 *
 * @flow
 **************************************************************************************************************************************************************/
'use strict'; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

var _interopRequireDefault3 = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireDefault2 = _interopRequireDefault3(require("@babel/runtime/helpers/interopRequireDefault"));

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyFiles = exports.RemoveDir = exports.CreateDir = exports.CreateFile = exports.ReadFile = undefined;

var _fsExtra = require("fs-extra");

var _fsExtra2 = (0, _interopRequireDefault2.default)(_fsExtra);

var _del = require("del");

var _del2 = (0, _interopRequireDefault2.default)(_del);

var _fs = require("fs");

var _fs2 = (0, _interopRequireDefault2.default)(_fs);

var _helper = require("./helper");

var _path = require("./path");

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Local
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Promisified reading a file
 *
 * @param  {string} location - The location of the file to be read
 *
 * @return {promise object}  - The content of the file
 */
const ReadFile = exports.ReadFile = (location
/*: string */
) =>
/*: Promise<string | Error> */
{
  return new Promise((resolve, reject) => {
    _fs2.default.readFile(location, `utf8`, (error, content) => {
      if (error) {
        _helper.Log.error(`Reading file failed for ${_helper.Style.yellow(location)}`);

        _helper.Log.error(JSON.stringify(error));

        reject(error);
      } else {
        _helper.Log.verbose(`Successfully read ${_helper.Style.yellow(location)}`);

        resolve(content);
      }
    });
  });
};
/**
 * Promisified writing a file
 *
 * @param  {string} location - The location the file should be written to
 * @param  {string} content  - The content of the file
 *
 * @return {promise object}  - Boolean true for 👍 || string error for 👎
 */


const CreateFile = exports.CreateFile = (location
/*: string */
, content
/*: string */
) =>
/*: Promise<Error | boolean> */
{
  CreateDir(_path.Path.dirname(location));
  return new Promise((resolve, reject) => {
    _fs2.default.writeFile(location, content, `utf8`, error => {
      if (error) {
        _helper.Log.error(`Writing file failed for ${_helper.Style.yellow(location)}`);

        _helper.Log.error(JSON.stringify(error));

        reject(error);
      } else {
        _helper.Log.verbose(`Successfully written ${_helper.Style.yellow(location)}`);

        resolve(true);
      }
    });
  });
};
/**
 * Create a path if it doesn’t exist
 *
 * @param  {string} dir - The path to be checked and created if not found
 *
 * @return {string}     - The path that was just worked at
 */


const CreateDir = exports.CreateDir = (dir
/*: string */
) =>
/*: string */
{
  _helper.Log.verbose(`Creating path ${_helper.Style.yellow(dir)}`);

  const splitPath = dir.split('/');
  splitPath.reduce((path, subPath) => {
    let currentPath;

    if (/^win/.test(process.platform) && path === '') {
      // when using windows (post truth) at beginning of the path
      path = './'; // we add the prefix to make sure it works on windows (yuck)
    }

    if (subPath != '.') {
      currentPath = _path.Path.normalize(`${path}/${subPath}`); // Log.verbose(`Checking if ${ Style.yellow( currentPath ) } exists`)

      if (!_fs2.default.existsSync(currentPath)) {
        try {
          _fs2.default.mkdirSync(currentPath);

          _helper.Log.verbose(`Successfully created ${_helper.Style.yellow(currentPath)}`);
        } catch (error) {
          _helper.Log.error(`Error when creating the folder ${_helper.Style.yellow(currentPath)} for path ${_helper.Style.yellow(dir)}`);

          _helper.Log.error(error);

          process.exit(1);
        }
      }
    } else {
      currentPath = subPath;
    }

    return currentPath;
  }, '');
  return splitPath.join('/');
};
/**
 * Removing folders and all it’s sub folders
 *
 * @param  {array} dir      - An array of all folders to be removed
 */


const RemoveDir = exports.RemoveDir = (dir
/*: string[] */
) => {
  const cleanDirs = dir.map(path => _path.Path.normalize(path));

  try {
    _del2.default.sync(cleanDirs);

    _helper.Log.verbose(`Removed ${_helper.Style.yellow(JSON.stringify(dir))} folder`);
  } catch (error) {
    _helper.Log.error(error);
  }
};
/**
 * Copy files or folder
 *
 * @param  {string} source      - The absolute path to the source
 * @param  {string} destination - The absolute path to the destination
 *
 * @return {promise object}     - Resolved once completed
 */


const CopyFiles = exports.CopyFiles = (source
/*: string */
, destination
/*: string */
) =>
/*: Promise<?Error> */
{
  _helper.Log.verbose(`Copy folder from ${_helper.Style.yellow(source)} to ${_helper.Style.yellow(destination)}`);

  return new Promise((resolve, reject) => {
    if (_fs2.default.existsSync(source)) {
      _fsExtra2.default.copy(source, destination, (error
      /*: Error */
      ) => {
        if (error) {
          reject(error);
        }

        resolve();
      });
    } else {
      _helper.Log.verbose(`No folder found at ${_helper.Style.yellow(source)}`);

      resolve();
    }
  });
};