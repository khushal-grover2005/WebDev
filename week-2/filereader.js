const fs=require("fs")

function print(error, data)
{
    if (error)
        throw error;
    else
        console.log(data);
}


function main(filename)
{
    fs.readFile(filename,"utf-8",print);
}

const filename=process.argv[2];

main(filename);