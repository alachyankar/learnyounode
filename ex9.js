// var http = require('http')
// var bl = require('bl')
// var async = require('async')


// async.map([process.argv[2],process.argv[3],process.argv[4]], 
//           http.get,
//           function (response) {
//               response.pipe(bl(function (err, data) {
//                   if (err) {
//                       return console.error(err)
//                   }

//               data = data.toString()
//               console.log(data)
//           }))})


var http = require('http')

responses = []
responses.length = process.argv.length-2
done = 0

function get_data(i)
{
  http.get(process.argv[i], function(res){
      res.setEncoding('utf8')
      var data = ""
      res.on("data", function(d){ data += d;})
      res.on("end", function(d){ responses[i-2] = data;
              done += 1;
        if( done === responses.length ) 
            for(j=0; j<responses.length; j++) console.log(responses[j]);
        })
  })
}

for(i=2; i<process.argv.length;i++) get_data(i)