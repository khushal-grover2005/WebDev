const fs=require('fs');
const { resolve } = require('path');

function print(err,data)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(data);
    }
}

function error(err)
{
    if(err)
    {
       throw err;
    }
}



function setTimeooutPromisified(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

const p=fs.writeFile('./khush.txt',"Hello there!",error);
const q=fs.writeFile('./khush2.txt',"hi there!",error);

setTimeooutPromisified(5000).then(p);
setTimeooutPromisified(10000).then(q);

setTimeooutPromisified(5000).then(()=>fs.readFile('./khush.txt','utf8',print));
setTimeooutPromisified(10000).then(()=>fs.readFile('./khush2.txt','utf8',print));