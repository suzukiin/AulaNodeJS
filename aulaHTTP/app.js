var http = require('http')

http.createServer(function(req, res) {
    res.end("ola")
}).listen(3000);


console.log("Servidor rodando . . .");