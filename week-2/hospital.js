let users=
[
    {
        name: "harkirat",
        kidney:
        [
            {
                healthy:false
            },
            {
                healthy:true
            }
        ]
    }

];

const express=require("express");
const app=express();

app.get('/',function(req,res)
    {
        let johnkidney=users[0].kidney;
        let count=0;

        for(let i=0;i<johnkidney.length;i++)
        {
            if(johnkidney[i].healthy)
                count+=1;
        }

        res.json
        (
            {
                kidneylen: johnkidney.length,
                healthy_kidney_count: count
            }
        );
    }
)
app.use(express.json());
app.post('/',function(req,res)
    {
        const ishealthy=req.body.isHealthy;
        users[0].kidney.push
        (
            {
                healthy:ishealthy
            }
        )
        res.json(
            {
                msg:"done"
            }
        )
    }
)

app.put('/',function(req,res)
    {
        const johnkidney=users[0].kidney;

        for(let i=0;i<johnkidney.length;i++)
        {
            johnkidney[i].healthy=true;
        }
        res.json({});
    }
)

app.delete('/',function(req,res)
    {
        let newarr=[];

        const johnkidney=users[0].kidney;

        for(let i=0;i<johnkidney.length;i++)
        {
            if(johnkidney[i].healthy==true)
                newarr.push(johnkidney[i]);
        }
        johnkidney=newarr;
        res.json({});

    }
)

app.listen(3000);