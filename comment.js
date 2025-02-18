// create web server
var http = require('http');

// create server object
var server = http.createServer(function(req, res) {
    // set response header
    res.writeHead(200, {'Content-Type': 'text/html'});

    // set response content
    res.write('<html><body><p>This is home Page.</p></body></html>');
    res.end();
});

// listen for incoming requests
server.listen(3000);