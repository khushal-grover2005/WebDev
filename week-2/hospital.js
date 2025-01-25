let users=
[
    {
<<<<<<< HEAD
        name: "harkirat",
=======
        name: "john",
>>>>>>> daf7cf3 (Initial commit with week-1 and week-2)
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

<<<<<<< HEAD
=======
app.use(express.json());

>>>>>>> daf7cf3 (Initial commit with week-1 and week-2)
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
<<<<<<< HEAD
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
=======

app.post('/', function (req, res) {
    console.log(req.body); // This will log the incoming request body
    const isHealthy = req.body.isHealthy;

    if (typeof isHealthy !== 'boolean') {
        return res.status(400).json({
            msg: "Invalid data. 'isHealthy' must be a boolean."
        });
    }

    users[0].kidney.push({
        healthy: isHealthy
    });

    res.json({
        msg: "done"
    });
});
>>>>>>> daf7cf3 (Initial commit with week-1 and week-2)

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
<<<<<<< HEAD

        const johnkidney=users[0].kidney;

=======
        
        let johnkidney=users[0].kidney;
        
>>>>>>> daf7cf3 (Initial commit with week-1 and week-2)
        for(let i=0;i<johnkidney.length;i++)
        {
            if(johnkidney[i].healthy==true)
                newarr.push(johnkidney[i]);
        }
<<<<<<< HEAD
        johnkidney=newarr;
=======
        users[0].kidney=newarr;
>>>>>>> daf7cf3 (Initial commit with week-1 and week-2)
        res.json({});

    }
)

<<<<<<< HEAD
app.listen(3000);
=======
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
>>>>>>> daf7cf3 (Initial commit with week-1 and week-2)
