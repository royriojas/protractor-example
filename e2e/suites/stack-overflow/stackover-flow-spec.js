describe( 'stackoverflow', function () {
  var ptor = protractor.getInstance();

  beforeEach(function () {
    browser.ignoreSynchronization = true;
  } );

  afterEach(function () {

  } );

  it( 'should find the number of links in a given url', function () {
    browser.get( 'http://stackoverflow.com/questions/24257802/how-to-browse-a-whole-website-using-selenium' );

    var script = function () {
      var cb = arguments[ 0 ];
      var nodes = document.querySelectorAll( 'a' );
      nodes = [].slice.call( nodes ).map(function ( a ) {
        return a.href;
      } );
      cb( nodes );
    };

    ptor.executeAsyncScript( script ).then(function ( res ) {
      var visit = function ( url ) {
        console.log( 'visiting url', url );
        browser.get( url );
        return ptor.sleep( 1000 );
      };

      var doVisit = function () {
        var url = res.pop();
        if ( url ) {
          visit( url ).then( doVisit );
        } else {
          console.log( 'done visiting pages' );
        }
      };

      doVisit();

    } );
  } );

} );
