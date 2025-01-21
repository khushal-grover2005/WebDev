let ctr=1;

function increment()
{
    ctr++;
    console.clear();
    console.log(ctr);
    setTimeout(increment,1000);
}

setTimeout(increment,1000);    