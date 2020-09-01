/***************************************************************************************************************************************************************
 *
 * Export shared helper code
 *
 * Slug          - Slugify a string
 * ConvertHrtime - Convert hrtime to seconds
 * Style         - Returning ansi escape color codes
 * Log           - A logging method
 * Notify        - The notify object
 * Notify.info   - Notify the system
 * ExitHandler   - Handle exiting of program
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
exports.ExitHandler = exports.Notify = exports.Log = exports.Style = exports.ConvertHrtime = exports.Slug = undefined;

var _nodeNotifier = require("node-notifier");

var _nodeNotifier2 = (0, _interopRequireDefault2.default)(_nodeNotifier);

var _slugify = require("slugify");

var _slugify2 = (0, _interopRequireDefault2.default)(_slugify);

var _progress = require("./progress");

var _watch = require("./watch");

var _path = require("./path");

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Local
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Slugify a string
 *
 * @param  {string} text - The string to be slugified
 *
 * @return {string}      - Slugified string
 */
const Slug = exports.Slug = (text
/*: string */
) =>
/*: string */
{
  if (typeof text === 'string') {
    _slugify2.default.extend({
      '.': '-',
      '\\': '-',
      '"': ' ',
      "'": ' ',
      '(': '-',
      ')': '-',
      '*': '-',
      '+': '-',
      '†': '-',
      '®': '-r-',
      '©': '-c-',
      '•': '-',
      '@': '-',
      '!': '-',
      '“': '-',
      '”': '-',
      '‘': '-',
      '’': '-',
      '…': '-',
      '~': '-'
    });

    return (0, _slugify2.default)(text).toLowerCase();
  } else {
    return text;
  }
};
/**
 * Convert hrtime to seconds
 *
 * @param {array} elapsedTime - The elapsed time started and stopped with process.hrtime
 */


const ConvertHrtime = exports.ConvertHrtime = (elapsedTime
/*: number[] | number */
) =>
/*: number | string */
{
  if (Array.isArray(elapsedTime)) {
    return (elapsedTime[0] + elapsedTime[1] / 1e9).toFixed(3);
  } else {
    return elapsedTime;
  }
};
/**
 * Returning ansi escape color codes
 * Credit to: https://github.com/chalk/ansi-styles
 *
 * @type {Object}
 */


const Style = exports.Style = {
  /**
   * Parse ansi code while making sure we can nest colors
   *
   * @param  {string} text  - The text to be enclosed with an ansi escape string
   * @param  {string} start - The color start code, defaults to the standard color reset code 39m
   * @param  {string} end   - The color end code
   *
   * @return {string}       - The escaped text
   */
  parse: (text
  /*: string */
  , start
  /*: string */
  , end
  /*: string */
  = `39m`) =>
  /*: string */
  {
    if (text !== undefined) {
      const replace = new RegExp(`\\u001b\\[${end}`, 'g'); // find any resets so we can nest styles

      return `\u001B[${start}${text.toString().replace(replace, `\u001B[${start}`)}\u001b[${end}`;
    } else {
      return ``;
    }
  },

  /**
   * Style a string with ansi escape codes
   *
   * @param  {string} text - The string to be wrapped
   *
   * @return {string}      - The string with opening and closing ansi escape color codes
   */
  black: (text
  /*: string */
  ) =>
  /*: string */
  Style.parse(text, `30m`),
  red: (text
  /*: string */
  ) =>
  /*: string */
  Style.parse(text, `31m`),
  green: (text
  /*: string */
  ) =>
  /*: string */
  Style.parse(text, `32m`),
  yellow: (text
  /*: string */
  ) =>
  /*: string */
  Style.parse(text, `33m`),
  blue: (text
  /*: string */
  ) =>
  /*: string */
  Style.parse(text, `34m`),
  magenta: (text
  /*: string */
  ) =>
  /*: string */
  Style.parse(text, `35m`),
  cyan: (text
  /*: string */
  ) =>
  /*: string */
  Style.parse(text, `36m`),
  white: (text
  /*: string */
  ) =>
  /*: string */
  Style.parse(text, `37m`),
  gray: (text
  /*: string */
  ) =>
  /*: string */
  Style.parse(text, `90m`),
  bold: (text
  /*: string */
  ) =>
  /*: string */
  Style.parse(text, `1m`, `22m`)
}; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Logging prettiness
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * A logging object
 *
 * @type {Object}
 */

const Log = exports.Log = {
  verboseMode: false,
  // verbose flag
  output: false,
  // have we outputted something yet?
  hasError: false,
  // let’s assume the best

  /**
   * Log a welcome message
   *
   * @param  {string} text - The text you want to log
   */
  welcome: (text
  /*: string */
  ) =>
  /*: void */
  {
    if (!Log.output) {
      // if we haven’t printed anything yet
      Log.space(); // only then we add an empty line on the top
    }

    _progress.Progress.clear();

    console.log(` 🐙           ${Style.bold(`${text}`)}`);

    _progress.Progress.display();

    Log.output = true; // now we have written something out
  },

  /**
   * Log an error
   *
   * @param  {string} text - The text you want to log with the error
   */
  error: (text
  /*: string */
  ) =>
  /*: void */
  {
    if (!Log.output) {
      // if we haven’t printed anything yet
      Log.space(); // only then we add an empty line on the top
    }

    _progress.Progress.clear();

    console.error(` 🔥  ${Style.red(`ERROR:   ${text}`)}`);
    Notify.info(text);

    _progress.Progress.display();

    Log.output = true; // now we have written something out

    Log.hasError = true; // and it was an error of all things
  },

  /**
   * Log a message
   *
   * @param  {string}  text - The text you want to log
   */
  info: (text
  /*: string */
  ) =>
  /*: void */
  {
    if (!Log.output) {
      Log.space();
    }

    _progress.Progress.clear();

    console.info(` 🔔  INFO:    ${text}`);
    Log.output = true;

    _progress.Progress.display();
  },

  /**
   * Log success
   *
   * @param  {string}  text - The text you want to log
   */
  ok: (text
  /*: string */
  ) =>
  /*: void */
  {
    if (!Log.output) {
      Log.space();
    }

    _progress.Progress.clear();

    console.info(` ✔  ${Style.green(`OK:`)}      ${Style.green(text)}`);
    Log.output = true;

    _progress.Progress.display();
  },

  /**
   * Log the final message
   *
   * @param  {string}  text - The text you want to log
   */
  done: (text
  /*: string */
  ) =>
  /*: void */
  {
    if (!Log.output) {
      Log.space();
    }

    _progress.Progress.clear();

    console.info(` 🚀           ${Style.green(Style.bold(text))}`);

    if (!Log.hasError) {
      Notify.info(`Build done`);
    }

    Log.hasError = false;
    Log.output = true;
  },

  /**
   * Log a verbose message
   *
   * @param  {string}  text - The text you want to log
   */
  verbose: (text
  /*: string */
  ) =>
  /*: void */
  {
    if (Log.verboseMode) {
      if (!Log.output) {
        Log.space();
      }

      console.info(` 😬  ${Style.gray(`VERBOSE: ${text}`)}`);
      Log.output = true;
    }
  },

  /**
   * Add some space to the output
   */
  space: () =>
  /*: void */
  {
    console.log(`\n`);
  }
};
/**
 * The notify object
 *
 * @type {Object}
 */

const Notify = exports.Notify = {
  silent: false,

  /**
   * Notify the system
   *
   * @param  {string}  text - The text you want to pop up
   */
  info: (text
  /*: string */
  ) =>
  /*: void */
  {
    if (!Notify.silent && _watch.Watch.running) {
      const notifyText = typeof text === 'object' ? JSON.stringify(text) : text;

      _nodeNotifier2.default.notify({
        icon: _path.Path.normalize(`${__dirname}/../assets/logo.png`),
        title: 'Cuttlebelle',
        message: notifyText
      });
    }
  }
};
/**
 * Handle exiting of program
 *
 * @param {null}   exiting - null for bind
 * @param {object} error   - Object to distinguish between closing events
 */

const ExitHandler = exports.ExitHandler = (exiting
/*: { withoutSpace: boolean } */
, error
/*: string */
) => {
  if (error && parseInt(error) !== 1 && error !== 'SIGINT') {
    try {
      // try using our pretty output
      Log.error(error);
    } catch (error) {
      // looks like it’s broken too so let’s just do this old school
      console.error(error);
    }
  }

  if (exiting.withoutSpace) {
    process.exit(0); // exit now
  }

  Log.space(); // adding some space

  process.exit(0); // now exit with a smile :)
};