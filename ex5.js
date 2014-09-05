fs = require('fs');
path = require('path');

fs.readdir(process.argv[2], function callback(err,data) {
  if (err) {
    throw err;
  }
  
  var result = [];
  for(i=0;i<data.length;i++) {
    if (path.extname(data[i]) === "." + process.argv[3]) {
      console.log(data[i]);
    }
  }
})