module.exports = function ( grunt ) {
  // region ### jsonlint
  // this task validates that the json files used to configure jshint, jscs and jsbeautifier are valid json files
  return {
    pkg: {
      src: [ 'package.json' ]
    },

    // the Javascript Code Style Checker config
    jscs: {
      src: [ 'grunt-deps/.jscs.json' ]
    },

    // the jshint config
    jshint: {
      src: [ 'grunt-deps/.jshintrc' ]
    },

    // the jsbeautifier config
    jsbeautifier: {
      src: [ 'grunt-deps/beautify-config.json' ]
    },

    // the codepainter config
    codepainter: {
      src: [ 'grunt-deps/codepainter.json' ]
    }
  };
  //endregion
};
