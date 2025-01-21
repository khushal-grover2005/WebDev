const express=require("express");

const app=express();

let errorCount = 0;

app.use((err, req, res, next) => {
    errorCount++;
    res.status(500).send('Something broke!');
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/displayerrors', (req, res) => {
    res.json({errorcount:errorCount});
});

app.listen(3000);