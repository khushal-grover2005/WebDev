function main()
{
    console.log("hello world\n");
}


function setPromisifiedTimeout(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

setPromisifiedTimeout(5000).then(main);