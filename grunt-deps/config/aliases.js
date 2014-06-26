module.exports = function ( grunt, pkg ) {
  'use strict';

  var common = require( './resources.js' );
  var gruntTaskUtils = require( 'grunt-ez-frontend/lib/grunt-task-utils.js' )( grunt );

  var gruntTasks = {
    'validate' : [
      'jsonlint',
      'jsbeautifier',
      'jshint',
      'jscs',
      'jsvalidate'
    ],
    'default': [
      'exec:protractor'
    ]
  };

  gruntTaskUtils.registerTasks( gruntTasks );
};
