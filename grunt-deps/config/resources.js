var grunt = require( 'grunt' );

var testSources = [ 'e2e/**/*.js' ];

var allSources = testSources.concat( [
  './grunt-deps/**/*.js',
  'Gruntfile.js'
] );

module.exports = {
  testsSources: testSources,
  allSources: allSources
};
