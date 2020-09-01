/***************************************************************************************************************************************************************
 *
 * Getting and retaining navigation infos
 *
 * Nav     - Retain nav information
 * Nav.set - Set navigation infos
 * Nav.get - Get navigation infos
 *
 **************************************************************************************************************************************************************/
'use strict'; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Local
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Nav = exports.ToNested = exports.ToDepth = undefined;

var _helper = require("./helper");

var _settings = require("./settings");

var _path = require("./path");

/**
 * Split a path into a nested object recursively
 *
 * @param  {string} source - The string path to be nested
 * @param  {object} target - The object we carry over in the recursion
 * @param  {string} prefix - The string path we carry over in the recursion so we can build the correct IDs
 *
 * @return {object}        - A nested object representation of the string
 */
const ToDepth = exports.ToDepth = (source, target = {}, prefix = '') => {
  if (typeof source === 'string') {
    const elements = source.split('/');

    let element = _path.Path.normalize(`${prefix}/${elements.shift()}`);

    if (element.startsWith('/')) {
      element = element.substring(1);
    }

    if (element.startsWith(`${_settings.SETTINGS.get().folder.homepage}${'/'}`)) {
      element = element.substring(_settings.SETTINGS.get().folder.homepage.length + 1);
    }

    target[element] = target[element] || element;

    if (elements.length) {
      target[element] = typeof target[element] === 'object' ? target[element] : {};
      ToDepth(elements.join('/'), target[element], element);
    }
  } else {
    return source;
  }
};
/**
 * Nest a bunch of paths into an object
 *
 * @param  {array} elements - A bunch of paths
 *
 * @return {object}         - A nested representation of the paths
 */


const ToNested = exports.ToNested = elements => {
  let nested = {};

  if (Array.isArray(elements)) {
    elements.forEach(item => {
      if (!(item === _settings.SETTINGS.get().folder.homepage)) {
        item = `${_settings.SETTINGS.get().folder.homepage}/${item}`;
      }

      ToDepth(item, nested);
    });
    return nested;
  } else {
    return elements;
  }
};
/**
 * Retain nav information
 *
 * @type {Object}
 */


const Nav = exports.Nav = {
  all: [],

  /**
   * Set navigation infos
   *
   * @param  {array} nav - An array of all pages IDs
   */
  set: nav => {
    _helper.Log.verbose(`Setting nav to ${_helper.Style.yellow(JSON.stringify(nav))}`);

    Nav.all = ToNested(nav);
  },

  /**
   * Get navigation infos
   *
   * @return {array} - The nested array of all pages
   */
  get: () => {
    return Nav.all;
  }
};