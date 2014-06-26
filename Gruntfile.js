//
// # App Grunt File
//
module.exports = function ( grunt ) {
  'use strict';

  // config-loader is a simple module that will load the configuration files
  // the custom tasks and the aliases in order to enable the grunt workflow
  require( './grunt-deps/config-loader.js' )( grunt, {

    // the base path relative to the config-loader.js location
    basePath: '../',

    // the path to the local custom tasks for this grunt file
    localTasks: 'grunt-deps/tasks/**/*.js',

    // the place where the tasks configuration live
    configs: 'grunt-deps/config/tasks/**/*.js',

    // the tasks aliases for grunt, they actually enable the grunt workflows.
    aliases: 'grunt-deps/config/aliases.js'
  } );
};
