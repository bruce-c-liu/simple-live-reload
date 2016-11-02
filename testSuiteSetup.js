    mocha.setup('bdd');
    window.expect = chai.expect;
    $(function() {
      window.mochaPhantomJS ? mochaPhantomJS.run() : mocha.run();
    });