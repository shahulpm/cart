var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(3000, () => { console.log('on port 3000') }); //the server o