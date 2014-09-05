

var sum = 0;

for(i=0;i<process.argv.length-2;i++) {
  num = Number(process.argv[i+2]);
  sum += num;
}

console.log(sum);
