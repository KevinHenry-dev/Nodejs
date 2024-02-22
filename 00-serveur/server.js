const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello World TOTO")
})

server.listen(process.env.PORT || 3000 )