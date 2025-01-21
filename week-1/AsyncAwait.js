function setTimeoutPromisified(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function print()
{
    await setTimeoutPromisified(1000);
    console.log("hi there!");
    await setTimeoutPromisified(3000);
    console.log("hello");
    await setTimeoutPromisified(3000);
    console.log("Khush");
}
print();
console.log("hello world");
