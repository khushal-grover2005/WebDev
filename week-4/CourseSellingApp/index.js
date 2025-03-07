require('dotenv').config()

const express= require("express")
const mongoose= require("mongoose")


const { userRouter } = require("./routes/user.js");
const { courseRouter } = require("./routes/course.js");
const { adminRouter } = require("./routes/admin.js");

const app= express();
app.use(express.json());


mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Failed to connect to MongoDB", err));

app.use('/api/v1/course', courseRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin', adminRouter);

app.listen(4000,()=>{
    console.log("server running on port 4000")
})



