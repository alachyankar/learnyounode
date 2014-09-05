var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (request, response) {
    request.pipe(map(function (str) {
      return str.toString().toUpperCase()
    })).pipe(response)

})

server.listen(process.argv[2])