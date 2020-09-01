/***************************************************************************************************************************************************************
 *
 * Keeping track of progress and displaying a progress bar
 *
 * Progress          - Store and display progress
 * Progress.set      - Set how many page we have to go through
 * Progress.tick     - Tick off one page
 * Progress.display  - Display current progress
 * Progress.finished - Clear progress display
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
exports.Progress = undefined;

var _windowSize = require("window-size");

var _windowSize2 = (0, _interopRequireDefault2.default)(_windowSize);

var _helper = require("./helper");

var _settings = require("./settings");

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Local
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Store and display progress
 *
 * @type {Object}
 */
const Progress = exports.Progress = {
  todo: 0,
  done: 0,

  /**
   * Set how many page we have to go through
   *
   * @param  {integer} amount - The amount of pages we have to get through
   */
  set: (amount
  /*: number */
  ) =>
  /*: void */
  {
    Progress.todo = amount;
  },

  /**
   * Tick off one page
   */
  tick: (width
  /*: number */
  ) =>
  /*: void */
  {
    Progress.done++;
    Progress.display(width);
  },

  /**
   * Display current progress
   */
  display: (width
  /*: ?number */
  ) =>
  /*: void */
  {
    if (!width || width === undefined) {
      width = _windowSize2.default ? _windowSize2.default.width : 0;
    }

    if (Progress.todo > 30 && !_helper.Log.verboseMode) {
      // only if we have at least x pages to render and verbose is off
      const progress = 100 / Progress.todo * Progress.done;
      const padding = 13;

      if (width > padding) {
        const ENDBITS = 2; // those -> ┤ and ├

        const maxWidth = width - padding * 2 - ENDBITS;
        const currentWidth = Math.ceil(maxWidth * (progress / 100));
        const whitespace = maxWidth - currentWidth > -1 ? maxWidth - currentWidth : 0;
        Progress.clear();
        process.stdout.write(`${' '.repeat(padding)}┤${_helper.Style.gray('▓').repeat(currentWidth)}${' '.repeat(whitespace)}├`);

        if (progress >= 100) {
          Progress.clear();
        }
      }
    }
  },

  /**
   * Clear progress display
   */
  clear: () =>
  /*: void */
  {
    process.stdout.write('\r\x1b[K'); // reset cursor
  }
};