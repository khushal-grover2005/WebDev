const express=require("express");

const app=express();

let request={};

function set_zero()
{
    request={};
}

setInterval(set_zero,1000);

app.use(function(req,res,next)
{
    const userid=req.headers["userid"];

    if (!userid) {
        res.status(400).json({ msg: "userid header is required" });
        return;
    }

    if(request[userid])
    {
        if(request[userid]>5)
        {
            res.status(400).json({msg:"request overflow"});
            next();
        }
        else
        {
            request[userid]+=1;
            next();
        }
    }
    else
    {
        request[userid]=1;
        next();
    }
});


app.get('/',function(req,res)
{
    res.json({msg:"request granted"});
})

app.listen(3000);
