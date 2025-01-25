const express=require("express");
const app=express();

app.use(function(req,res,next)
{
    console.log(req.method);
    console.log(req.url);
    console.log(new Date());

    next();
})

app.get('/sum',function(req,res)
{
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({

        "the sum is": a+b
    })
})

app.get('/multiply',function(req,res)
{
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({

        "the product is": a*b
    })
})

app.get('/divide',function(req,res)
{
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({

        "the quotient is": a/b
    })
})

app.get('/sub',function(req,res)
{
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({

        "the difference is": a-b
    })
})


app.listen(3000);