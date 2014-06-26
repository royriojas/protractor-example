module.exports = function ( grunt ) {
  var resources = require( '../resources' );

  // region ### jshint
  //
  // validate the javascript files against jshint
  return {
    options: {
      // the default configuration is taken from this file
      jshintrc: 'grunt-deps/.jshintrc'
    },
    source: {
      src: resources.allSources
    }
  };
  // endregion
};
