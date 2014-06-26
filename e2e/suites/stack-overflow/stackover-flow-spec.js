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
      var cb = arguments[0];
      var nodes = document.querySelectorAll('a');
      nodes = [].slice.call(nodes).map(function (a) {
        return a.href;
      });
      cb(nodes);
    };

    ptor.executeAsyncScript(script).then(function (res) {
      var visit = function (url) {
        console.log('visiting url', url);
        browser.get(url);
        return ptor.sleep(1000);
      };

      var doVisit = function () {
        var url = res.pop();
        if (url) {
          visit(url).then(doVisit);
        }
        else {
          console.log('done visiting pages');
        }
      };

      doVisit();

    });

//    var elements = element.all(by.css('a')).then(function(res) {
//
//    });


//    var visit = function (url) {
//      console.log('visiting: ' + url);
//      browser.get( url );
//      return ptor.sleep(1000);
//    };
//
//    var links = [];
//    element.all(by.css('a')).then(function (res) {
//
//      links = [].slice.call(res);
//      console.log('#### length: ', links.length);
//      var url = links.pop().getAttribute('href');
//
//      var doVisit = function () {
//        var url = links.pop().getAttribute('href');
//        url.then(function (urlAttr) {
//          visit(urlAttr).then(doVisit);
//        });
//      };
//
//      url.then(function (urlAttr) {
//        visit(urlAttr).then(doVisit);
//      });
//
//    });


  } );

} );
