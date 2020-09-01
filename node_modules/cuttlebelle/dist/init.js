/***************************************************************************************************************************************************************
 *
 * Setup a new cuttlebelle environment for the init option
 *
 * Init      - Check if you already have folders in the current directory
 * CopyStuff - Copy folders into the working directory
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
exports.CopyStuff = exports.Init = undefined;

var _fsExtra = require("fs-extra");

var _fsExtra2 = (0, _interopRequireDefault2.default)(_fsExtra);

var _fs = require("fs");

var _fs2 = (0, _interopRequireDefault2.default)(_fs);

var _files = require("./files");

var _helper = require("./helper");

var _settings = require("./settings");

var _path = require("./path");

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Local
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Check if you already have folders in the current directory
 */
const Init = exports.Init = () =>
/*: void */
{
  _helper.Log.info(`Creating pages for you`);

  const _hasContent = _fs2.default.existsSync(_settings.SETTINGS.get().folder.content);

  const _hasCode = _fs2.default.existsSync(_settings.SETTINGS.get().folder.code);

  const _hasAssets = _fs2.default.existsSync(_settings.SETTINGS.get().folder.assets);

  if (_hasContent || _hasCode || _hasAssets) {
    if (_hasContent) {
      _helper.Log.info(`Found content in ${_helper.Style.yellow(_settings.SETTINGS.get().folder.content)}`);
    }

    if (_hasCode) {
      _helper.Log.info(`Found content in ${_helper.Style.yellow(_settings.SETTINGS.get().folder.code)}`);
    }

    if (_hasAssets) {
      _helper.Log.info(`Found content in ${_helper.Style.yellow(_settings.SETTINGS.get().folder.assets)}`);
    }

    _helper.Log.info(`There were already files or folders in the content, code or assets folder.`);
  } else {
    CopyStuff('code');
    CopyStuff('content');
    CopyStuff('assets');

    _helper.Log.done(`Successfully created a clean slate`);
  }
};
/**
 * Copy folders into the working directory
 *
 * @param  {string} folder - The name of the folder
 */


const CopyStuff = exports.CopyStuff = (folder
/*: string */
) =>
/*: void */
{
  const source = _path.Path.normalize(`${__dirname}/../.template/init/${folder}`);

  const destination = _settings.SETTINGS.get().folder[folder];

  (0, _files.CreateDir)(destination);

  _fsExtra2.default.copySync(source, destination);
};