var http = require("http")
var url = require('url')





var server = http.createServer(function (req, res) {
    var parsed = url.parse(req.url,true)
    var date = parsed.query.iso
    res.writeHead(200, {'Content-Type': 'application/json'})
    if (req.method ==="GET") {
      if (parsed.pathname === '/api/parsetime') {
        var now = new Date(date)
        res.end(JSON.stringify(
          { hour: now.getHours(),
            minute: now.getMinutes(),
            second: now.getSeconds()
          }))
      }

      if (parsed.pathname === '/api/unixtime') {
        var now = new Date(date)
        res.end(JSON.stringify(
          { unixtime: now.getTime()}))
      }
    }
})

server.listen(process.argv[2])