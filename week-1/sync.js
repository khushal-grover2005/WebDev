const fs=require('fs');



const data=fs.readFileSync('./khush.txt','utf8');
console.log(data);

const data1=fs.readFileSync('./khush2.txt','utf8');
console.log(data1);

console.log("End of the program");   
