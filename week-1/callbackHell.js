
function setTimeoutPromisified(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}


setTimeout(function()
    {
    console.log("hi there!");
        setTimeout(function()
        {
        console.log("hello");
            setTimeout(function()
            {
                console.log("Khush");
            },3000);

        },3000);    
    },1000);

setTimeoutPromisified(1000).then(function(){
    console.log("hi there!");
    setTimeoutPromisified(3000).then(function()
    {
        console.log("hello");
        setTimeoutPromisified(3000).then(function()
        {
            console.log("Khush");
        });
    });
})    