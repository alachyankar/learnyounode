var fs = require('fs');

var file = process.argv[2];

var buff = fs.readFileSync(file);

var result = buff.toString();

console.log(result.split('\n').length - 1);