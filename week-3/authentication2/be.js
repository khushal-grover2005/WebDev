const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "random";
const mongoose = require("mongoose");
const cors=require("cors");
const bcrypt=require("bcrypt");

const { UserModel, TodoModel } = require("./mongo.js");

mongoose.connect("mongodb+srv://khushal_grover2005:Doraemon%4012345@cluster0.1nfrd.mongodb.net/todo")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Failed to connect to MongoDB", err));

app.use(express.json());
app.use(cors());

app.post("/signup", async function(req, res) {
    const { email, password, name } = req.body;

    // Basic validation
    if (!email || !password || !name) {
        return res.status(400).json({
            message: "Email, password, and name are required"
        });
    }

    const hashedpassword= await bcrypt.hash(password,5);

    try {
        await UserModel.create({
            email: email,
            password: hashedpassword,
            name: name
        });

        res.json({
            message: "You are signed up"
        });
    } catch (err) {
        res.status(500).json({
            message: "Error signing up user",
            error: err.message
        });
    }
});

app.post("/signin", async function(req, res) {
    const { email, password } = req.body;

    try {
        const response = await UserModel.findOne({
            email: email,
        });

        if (!response) {
            res.status(400).json({
                msg:"the user does not exist"
            })
            return ;
        }
        const flag= await bcrypt.compare(password,response.password);

        if(flag)
        {
            const userId = response._id.toString();
            const token = jwt.sign({ id: userId }, JWT_SECRET);

            res.json({
                token,
                userId
            });
        }
        else
        {
            res.status(400).json({
                msg:"incorrect credentials"
            });
        }

        
    } catch (err) {
        res.status(500).json({
            message: "Error signing in user",
            error: err.message
        });
    }
});

app.post('/todo', auth, async function(req, res) {
    const userId = req.userId;
    const { title } = req.body;

    try {
        const todo = await TodoModel.create({
            title,
            userId
        });

        res.json({
            todo
        });
    } catch (err) {
        res.status(500).json({
            message: "Error creating todo",
            error: err.message
        });
    }
});

app.get('/todos', auth, async function(req, res) {
    const userId = req.userId;

    try {
        const todos = await TodoModel.find({ userId });

        res.json({
            userId: userId,
            todos
        });
    } catch (err) {
        res.status(500).json({
            message: "Error fetching todos",
            error: err.message
        });
    }
});

app.delete('/todo/:id', auth, async function(req, res) {
    const userId = req.userId;
    const todoId = req.params.id;  // Get the todo ID from the URL parameters

    try {
        // Find the todo by its ID and ensure the user is the one who created it
        const todo = await TodoModel.findOne({ _id: todoId, userId });

        if (!todo) {
            return res.status(404).json({
                message: "Todo not found or you don't have permission to delete it"
            });
        }

        // If the todo exists, delete it
        await TodoModel.deleteOne({ _id: todoId });

        res.json({
            message: "Todo deleted successfully"
        });
    } catch (err) {
        res.status(500).json({
            message: "Error deleting todo",
            error: err.message
        });
    }
});


function auth(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(403).json({ message: "Token missing" });
    }

    try {
        const response = jwt.verify(token, JWT_SECRET);
        req.userId = response.id;  // Set userId correctly
        next();
    } catch (e) {
        res.status(403).json({ message: "Incorrect token or expired" });
    }
}

app.listen(4000, '0.0.0.0', () => {
    console.log('Backend running on port 4000');
  });
  
