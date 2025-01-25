const express=require("express");
const app=express();

function calculate(n)
{
    return n+10;
}

app.get('/',function(req,res)
{
    const n=parseFloat(req.query.n);
    const ans=parseFloat(calculate(n));
    res.send(ans.toString());
})

app.listen(3000);