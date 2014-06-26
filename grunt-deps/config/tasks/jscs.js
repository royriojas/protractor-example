module.exports = function ( grunt ) {
  var resources = require( '../resources' );
  // region ### Javascript Code Style Checker
  // validates the coding style of the files against the given configuration
  // which is stored under grunt-deps/.jscs.json file
  return {
    source: {
      src: resources.allSources
    },
    options: {
      config: 'grunt-deps/.jscs.json'
    }
  };
  // endregion
};
