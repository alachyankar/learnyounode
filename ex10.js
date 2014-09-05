var net = require('net')

var server = net.createServer(function (socket) {
  var result = ''
  var date = new Date()
  var month = date.getMonth() + 1

  result = result + date.getFullYear() + '-'
  result = result + '0' + month + '-'
  result = result + '0' + date.getDate() + ' '
  result = result + '0' + date.getHours() + ':'
  result = result + '0' + date.getMinutes()

  socket.end(result)
  console.log()
})

server.listen(process.argv[2])
