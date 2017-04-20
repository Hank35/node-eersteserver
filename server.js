var http = require('http');

function onRequest(request, response){
	console.log('er was een request');
	response.writeHead(200,{'Content-Type': 'text/html'});
	response.write('<h1>Aardappels!</h1>');
	response.end();
}

http.createServer(onRequest).listen(process.env.PORT || 3000);

console.log('De server luistert op port 3000');