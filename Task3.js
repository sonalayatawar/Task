const fs = require('fs');
const reader = fs.createReadStream('file.txt');
reader.setEncoding('utf8');

reader.on('data',function(chunk){
    let data = chunk;
    let totalWords = data.split(/\s+/).length;
console.log("Total words in file is :",totalWords);
})
