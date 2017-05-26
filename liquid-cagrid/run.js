nw.Window.open('index.html', {}, function(win) {
  var gui = require('nw.gui');

  win.on('resize', function(w, h) {
    console.log( 'resized to', w ,h );
  });
  
  win.moveTo(0, 0);
  win.resizeTo( 1280, 850 );
});