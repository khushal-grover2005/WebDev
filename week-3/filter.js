function filterlogic(n)
{
    if(n%2==0)
        return true;
    else
    return false;
}

input=[1,2,3,4,5,6]

const ans=input.filter(filterlogic);
console.log(ans);