function getAndPrintHTML (options) {
  var https = require('https');

  function printAndGet(response) {
    var output = '';
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
  
    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      //console.log('Chunk Received. Length:', data.length);
      output += data
    });
  
    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.\n' + output);
    });
  }

  if (options) {
    https.get(options, printAndGet);
  }
  else {  
    https.get(requestOptions, printAndGet);
  }
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};
getAndPrintHTML()