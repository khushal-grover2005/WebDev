const express=require("express");
const app=express();


function calculate(n)
{
    return n+10;
}

app.get('/sum',function(req,res)
{    
    const a=parseFloat(req.query.a);
    const b=parseFloat(req.query.b);

    res.json({
        sum:a+b
    })

})

app.get('/multiply',function(req,res)
{    
    const a=parseFloat(req.query.a);
    const b=parseFloat(req.query.b);

    res.json({
        product:a*b
    })

})

app.get('/division',function(req,res)
{
    const a=parseFloat(req.query.a);
    const b=parseFloat(req.query.b);
    if(b==0)
    {
        res.status(404).json({msg:"wrong input"});
    }

    res.json({
        quotient:a/b
    })

})

app.get('/difference',function(req,res)
{
    const a=parseFloat(req.query.a);
    const b=parseFloat(req.query.b);

    res.json({
        differnece:a-b
    })

})

app.listen(3000);