module.exports = function ( grunt ) {
  var resources = require( '../resources' );

  // region ### jsvalidate
  // validate the javascript files looking for syntax errors. It complements jshint and it is based on Esprima.
  return {
    options: {
      globals: {},
      esprimaOptions: {},
      verbose: false
    },
    all: {
      files: {
        src: resources.allSources
      }
    }
  };
  // endregion
};
