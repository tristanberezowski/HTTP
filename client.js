function getAndPrintHTMLChunks () { //logs each chunk of data as it is received

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  var https = require('https');   

  https.get(requestOptions, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
  
    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      //console.log('Chunk Received. Length:', data.length);
      console.log(data, '\n')
    });
  
    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });
}
getAndPrintHTMLChunks()