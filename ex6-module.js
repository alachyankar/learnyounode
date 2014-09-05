var fs = require('fs');
var path = require('path');




module.exports = function (dirname, filter, callback) {
    fs.readdir(dirname, function(err, data) {
      if (err) {
        return callback(err);
      }

      var list = []

      data.forEach(function (file) {
        if (path.extname(file) === '.' + filter) {
          list.push(file);
        }
      })


      callback(null,list);
    })
}

