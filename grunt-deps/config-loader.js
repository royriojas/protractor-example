module.exports = function ( grunt, args ) {
  'use strict';

  var path = require( 'path' );

  // only enable the reporting option if the flag `report-time` is passed when called
  // grunt. Example: `grunt --report-time`
  if ( grunt.option( 'report-time' )) {
    // **Enable time-grunt**
    //
    // In order to have a nice report of the time consumed by each task.
    // This will generate a report with a nice bar chart in the console after all grunt task finished to execute
    require( 'time-grunt' )( grunt );
  }

  // **load all grunt tasks without specifying them by name**.
  //
  // This is handy because it is not longer required
  // to register a task calling grunt.loadNmpTasks('grunt-name-of-task');
  require( 'matchdep' )
    .filterDev( 'grunt-*' )
    .forEach( grunt.loadNpmTasks );

  // the base path relative to the location of this file
  // when called from within the gruntfile.js
  var basePath = args.basePath || '';

  // Custom tasks for this project
  var localTasks = grunt.file.expand( args.localTasks );

  // iterate over them and execute them
  localTasks.forEach(function ( entry ) {
    require( path.join( basePath, entry ))( grunt );
  } );

  // tasks configs
  var localConfig = grunt.file.expand( args.configs );

  // **pkg**
  //
  // The package.json of this module
  var pkg = require( path.join( args.basePath, 'package.json' ));

  // **overriding `pkg.version`**
  //
  // If a `build-number` argument was passed from the command line then it overrides the value in the pkg.version.
  // This allows Bamboo to pass the **buildNumber** to be used as the version number of the generated javascript files
  // and resources
  var optionBuildNumber = grunt.option( 'build-number' ) || 'dev';
  pkg.version = optionBuildNumber || pkg.version;

  grunt.option( 'build-number', pkg.version );

  grunt.initConfig( {
    pkg: pkg
  } );

  // iterate over them and register them in the config
  localConfig.forEach(function ( entry ) {
    var outCfg = require( path.join( basePath, entry ))( grunt, pkg );
    grunt.config.set( path.basename( entry, '.js' ), outCfg );
  } );

  // load the aliases
  require( path.join( basePath, args.aliases ))( grunt, pkg );
};
