var https = required('http');

https.createServer(function(req, res){
res.writeHead(200, {'Content-Type': 'text/html'});
res.end('Hello world');
}).listen(8080);