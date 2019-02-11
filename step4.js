function getHTML (options, callback) {
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
      callback(output)
    });
  }

  if (options) {
    https.get(options, printAndGet);
  }
  else {  
    https.get(requestOptions, printAndGet);
  }
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions,printHTML)