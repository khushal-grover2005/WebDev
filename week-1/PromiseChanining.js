function setTimeoutPromisified(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

setTimeoutPromisified(1000).then(function()
{
    console.log("hi there!");
    return setTimeoutPromisified(3000);
}).then(function()
{
    console.log("hello");
    return setTimeoutPromisified(3000);
}).then(function()
{
    console.log("Khush");
});