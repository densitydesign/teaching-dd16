#!/usr/bin/env node

/***************************************************************************************************************************************************************
 *
 * Generate static files from the content folder with react components
 *
 * This is where we delegate the program and get it all started
 *
 **************************************************************************************************************************************************************/
'use strict'; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

var _interopRequireDefault3 = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireDefault2 = _interopRequireDefault3(require("@babel/runtime/helpers/interopRequireDefault"));

var _fs = require("fs");

var _fs2 = (0, _interopRequireDefault2.default)(_fs);

var _helper = require("./helper");

var _cli = require("./cli");

var _render = require("./render");

var _settings = require("./settings");

var _docs = require("./docs");

var _watch = require("./watch");

var _init = require("./init");

var _path = require("./path");

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Local
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// CLI options
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// help flag
if (process.argv.includes('-h') || process.argv.includes('help')) {
  (0, _cli.DisplayHelp)();
} // version flag


if (process.argv.includes('-V') || process.argv.includes('--version')) {
  (0, _cli.DisplayVersion)();
} // keep track of execution time


const startTime = process.hrtime();
(0, _cli.DisplayWelcome)(); // verbose flag

if (process.argv.includes('-v') || process.argv.includes('--verbose')) {
  _helper.Log.verboseMode = true;
} // silent flag


if (process.argv.includes('-s') || process.argv.includes('--silent')) {
  _helper.Notify.silent = true;
} // set watch flag


if (process.argv.includes('-w') || process.argv.includes('watch')) {
  _watch.Watch.running = true;
} // merging default settings with package.json


const pkgLocation = _path.Path.normalize(`${process.cwd()}/package.json`);

if (_fs2.default.existsSync(pkgLocation)) {
  const loacalPkg = require(pkgLocation);

  _settings.SETTINGS.set(loacalPkg.cuttlebelle);
} // run init before building


if (process.argv.includes('-i') || process.argv.includes('init')) {
  (0, _init.Init)();
} // build docs


if (process.argv.includes('-d') || process.argv.includes('docs')) {
  (async function () {
    let pages;

    try {
      pages = await (0, _docs.BuildDocs)();
    } catch (error) {
      _helper.Log.error(`Trying to generate the docs failed.`);

      _helper.Log.error(error);

      process.exit(1);
    }

    const elapsedTime = process.hrtime(startTime);

    _helper.Log.done(`${pages > 0 ? `Successfully built ${_helper.Style.yellow(pages)} doc pages ` : `No doc pages have been build `}` + `to ${_helper.Style.yellow(_settings.SETTINGS.get().folder.docs.replace(_settings.SETTINGS.get().folder.cwd, ''))} ` + `in ${_helper.Style.yellow(`${(0, _helper.ConvertHrtime)(elapsedTime)}s`)}`);

    process.exit(0);
  })();
} // build site
else {
    (async function () {
      let content;
      let layout; // pre-render everything

      try {
        ({
          content,
          layout
        } = await (0, _render.PreRender)());
      } catch (error) {
        _helper.Log.error(`Trying to initilize the pages failed.`);

        _helper.Log.error(error);

        process.exit(1);
      } // nothing to render


      if (content.length === 0) {
        _helper.Log.info(`Nothing to generate; consider running ${_helper.Style.yellow(`cuttlebelle init`)} to get a clean slate.`);

        const elapsedTime = process.hrtime(startTime);

        _helper.Log.done(`Done in ${_helper.Style.yellow(`${(0, _helper.ConvertHrtime)(elapsedTime)}s`)}`);

        process.exit(0);
      } // generate all files unless it’s disabled


      if (!process.argv.includes('-n') && !process.argv.includes('--no-generate')) {
        _helper.Log.info(`Generating pages`);

        const allPromises = []; // we need to move the assets folder in into the site/ folder with the same name so let's merge them together

        let assetsLocation = _settings.SETTINGS.get().folder.assets.split('/');

        assetsLocation = _path.Path.normalize(`${_settings.SETTINGS.get().folder.site}/${assetsLocation[assetsLocation.length - 2]}/`); // copy all asset files to the site/ folder

        allPromises.push((0, _render.RenderAssets)(_settings.SETTINGS.get().folder.assets, assetsLocation)); // render all pages to site/

        allPromises.push((0, _render.RenderAllPages)(content, layout));
        let pages;

        try {
          pages = await Promise.all(allPromises);
        } catch (error) {
          _helper.Log.error(`Generating pages failed :(`);

          _helper.Log.error(error);

          process.exit(1);
        }

        const elapsedTime = process.hrtime(startTime);

        _helper.Log.done(`${pages.length > 0 ? `Successfully built ${_helper.Style.yellow(pages[1].length)} page${pages[1].length > 1 ? 's' : ''} ` : `No pages have been build `}` + `to ${_helper.Style.yellow(_settings.SETTINGS.get().folder.site.replace(_settings.SETTINGS.get().folder.cwd, ''))} ` + `in ${_helper.Style.yellow(`${(0, _helper.ConvertHrtime)(elapsedTime)}s`)}`);
      } else {
        _helper.Log.info(`Skipping generation of pages`);
      } // run watch on flag


      if (_watch.Watch.running) {
        _watch.Watch.start();
      }
    })();
  } //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exit handler
//--------------------------------------------------------------------------------------------------------------------------------------------------------------


process.on('exit', _helper.ExitHandler.bind(null, {
  withoutSpace: false
})); // on closing

process.on('SIGINT', _helper.ExitHandler.bind(null, {
  withoutSpace: true
})); // on [ctrl] + [c]

process.on('uncaughtException', _helper.ExitHandler.bind(null, {
  withoutSpace: false
})); // on uncaught exceptions