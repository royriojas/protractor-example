var grunt = require( 'grunt' );
var path = require( 'path' );

// An example configuration file.
var config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'firefox'
  },

  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //  capabilities: {
  //    'browserName': 'internet explorer',
  //    'platform': 'ANY',
  //    'version': '11'
  //  },
  chromeDriver: '../node_modules/protractor/selenium/chromedriver',
  //chromeOnly: true,
  // Capabilities to be passed to the webdriver instance.
  //  capabilities: {
  //    'browserName': 'chrome'
  //  },
  suites: {
    // hack to remove the dots reporter
    hack: '../e2e/reporter-hack.js'
  },

  onPrepare: function () {
    require( 'jasmine-spec-reporter' );
    // add jasmine spec reporter
    jasmine.getEnv().addReporter( new jasmine.SpecReporter( {
      displayStacktrace: true,
      displaySpecDuration: true
    } ));
  },

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true // Use colors in the command line report.
  }
};

var files = grunt.file.expand( './e2e/suites/**/*spec.js' );
//console.log(files);

var getDirectoryNameOfFile = function ( file ) {
  var name = path.dirname( file );

  var parts = name.split( path.sep );

  if ( parts.length > 0 ) {
    name = parts[ parts.length - 1 ];
  }

  return name;
};

files.forEach(function ( file ) {
  var dName = getDirectoryNameOfFile( file );

  config.suites[ dName ] = config.suites[ dName ] || '../e2e/suites/' + dName + '/**/*spec.js';

} );

exports.config = config;
