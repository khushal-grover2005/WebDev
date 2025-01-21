const fs=require('fs');

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


fs.readFile('./khush.txt','utf8',print);


fs.readFile('./khush2.txt','utf8',print);


console.log("End of the program");   
