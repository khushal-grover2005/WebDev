const bodyParser = require('body-parser');
const express = require('express');
const app = express();



app.use(bodyParser())

app.post('/sum',function(req,res)
{
    const {a,b}= req.body;

    res.json({
        "the sum is":a+b
    })
})

app.listen(4000);




