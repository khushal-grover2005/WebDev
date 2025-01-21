const express=require("express");
const app=express();

let rq=0;

app.use(function(req,res,next)
    {
        rq+=1;
        next();
    }
)

app.get('/',function(req,res)
    {
        res.json({msg:"john"});        
    }
)

app.get('/request',function(req,res)
    {
        res.json({requestcount: rq});        
    }
)

app.listen(3000);