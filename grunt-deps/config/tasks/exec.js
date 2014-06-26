// # grunt exec task
//
// Run terminal commands from within grunt
module.exports = function ( grunt ) {
  // **lib module**
  //
  // this module include some utilities, like `lib.format`, `lib.isNullOrEmpty`, `lib.isNull`, `lib.extend`, etc
  var lib = require( 'grunt-ez-frontend/lib/lib.js' );
  var resources = require('../resources');

  return {
    codepainter: {
      command: function ( glob ) {

        if ( glob ) {
          return lib.format( 'node_modules/codepainter/bin/codepaint xform -j {0} "{1}"',
            'grunt-deps/codepainter.json', glob );
        }

        // ** sourceFilesGlobs**
        //
        // globs to point to all the source files in this project
        var sourceFilesGlobs = resources.allSources;

        return sourceFilesGlobs.map(function ( glob ) {
          return lib.format( 'node_modules/codepainter/bin/codepaint xform -j {0} "{1}"',
            'grunt-deps/codepainter.json', glob );
        } ).join( ' && ' );
      }
    },

    protractor: {
      command: function (suite) {
        var commands = [];
        if ( !grunt.file.exists( './node_modules/protractor/' )) {
          commands.push( 'npm i protractor' );
        }
        if ( !grunt.file.exists( './node_modules/protractor/selenium/' )) {
          commands.push( './node_modules/protractor/bin/webdriver-manager update' );
        }
        if(!suite) {
          commands.push( './node_modules/protractor/bin/protractor ./grunt-deps/protractor.conf.js' );
        }
        else {
          commands.push( lib.format('./node_modules/protractor/bin/protractor ./grunt-deps/protractor.conf.js --suite {0}', suite) );
        }

        return commands.join( '\n' );
      }
    }
  };
};
