const express = require('express');
const path = require('path');
const app = express();

app.use(express.json())

app.post('/sum',function(req,res)
{
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({
        "the sum is":a+b
    })


    
})

app.listen(4000);




