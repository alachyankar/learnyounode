var bl = require('bl');
var http = require('http');

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  var blist = new bl()
  response.pipe(bl(function (err, data) {
    if (err) {
      console.error(err)
    }
    blist.append(data.toString())
    console.log(blist.length)
    console.log(blist.toString())
  }))

})