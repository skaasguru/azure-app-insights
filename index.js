const appInsights = require('applicationinsights');
appInsights.setup('INSTRUMENTATION_KEY');
appInsights.start();

var http = require('http');
const fs = require('fs');


var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/html"});

    if (request.url == '/error') {
        appInsights.defaultClient.trackException({exception: new Error("Hi! I am a Server error.")});
        response.write('Hi! I am a Server error.');
        response.end();
    } else {
        fs.readFile(__dirname + '/index.html', function (err, data) {
            if (err) {
                response.statusCode = 500;
                response.write('<h1>Internal Server Error</h1>');
                response.end();
            } else {
                response.write(data);
                response.end();
            }

        });
    }



});

var port = process.env.PORT || 80;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
