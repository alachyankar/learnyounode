var mymodule = require('./ex6-module');

var cb = function (err, data) {
  if (err) {
    throw error;
  } 

  data.forEach(function (file) {
    console.log(file);
  })
}

mymodule(process.argv[2],process.argv[3],cb);


