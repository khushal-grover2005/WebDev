const jwt=require("jsonwebtoken");
const JWT_SECRET="random";
const cors= require("cors");

const express = require("express");
const app = express();

const users = [];

app.use(cors());

app.use(express.json());

app.post('/signing_up', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    users.push({ username: username, password: password});

    res.json({ msg: "You are signed up" });  // Respond with a token after signing up
});

app.post('/signing_in', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) 
            {
                const token = jwt.sign({
                    username: username
                },JWT_SECRET);
                res.json({
                msg: "you are logged in",
                token: token // send a token
            });
            return;  // Exit after sending the response
        }
    }
    
    res.status(400).json({
        msg: "bad gateway"
    });
});

app.get('/me', function (req, res) 
    {
        const token = req.headers['authorization'];
    
        const decodedinfo = jwt.verify(token, JWT_SECRET);
        const username = decodedinfo.username;

        for (let i = 0; i < users.length; i++) 
        {
            if (username === users[i].username) 
            {
            res.json({
                username: users[i].username,
                password: users[i].password,
                });
            return;
            }
        res.status(400).json({ msg: "bad request" });
         }
    });

    app.delete('/logout', function (req, res) {
        // Simply tell the client to remove the token from the client-side
        res.json({ msg: "You have logged out" });
        // There's nothing server-side to do here, since JWTs are stateless
    });
app.listen(4000);
