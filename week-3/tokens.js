const express = require("express");
const app = express();

const users = [];

app.use(express.json());

function generate_token(username, password) {
    return username + password + "123";
}

app.post('/signing_up', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const token = generate_token(username,password);
    users.push({ username: username, password: password, token: token});

    res.json({ msg: "done" });  // Respond with a token after signing up
});

app.post('/signing_in', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            res.json({
                msg: "you are logged in",
                token: users[i].token // send a token
            });
            return;  // Exit after sending the response
        }
    }
    
    res.status(400).json({
        msg: "bad gateway"
    });
});

app.get('/me', function (req, res) {
    const token = req.headers['authorization'];

    for (let i = 0; i < users.length; i++) {
        if (token === users[i].token) {
            res.json({
                username: users[i].username,
                password: users[i].password,
            });
            return;
        }
    }
    res.status(400).json({ msg: "bad request" });
});

app.listen(3000);
