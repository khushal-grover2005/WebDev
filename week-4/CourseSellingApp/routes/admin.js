const express = require("express");
const jwt= require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD}= require("../config");
const adminRouter = express.Router();
const {adminModel}= require("../db.js");
const {courseModel}= require("../db.js");

const zod= require("zod");
const bcrypt= require("bcrypt");
const { adminmiddleware } = require("../middleware/admin.js");

const emailschema= zod.string().email();
const passwordschema= zod.string().min(6);

adminRouter.post('/signup', async function(req, res) {
    try {
        const { firstname, lastname, email, password } = req.body;

        const emailresponse = emailschema.safeParse(email);
        const passwordresponse = passwordschema.safeParse(password);

        if (!emailresponse.success || !passwordresponse.success) {
            res.status(403).json({
                msg: "invalid format"
            });
            return;
        }

        const hashedpassword = await bcrypt.hash(password, 5);

        await adminModel.create({
            email: email,
            firstname: firstname,
            lastname: lastname,
            password: hashedpassword
        });

        res.json({
            msg: "signup successful"
        });
    } catch (error) {
        res.status(500).json({
            msg: "internal server error",
            error: error.message
        });
    }
});

adminRouter.post('/signin', async function(req, res) {
    try {
        const { email, password } = req.body;

        const user = await adminModel.findOne({
            email: email
        });

        if (user) {
            const flag = await bcrypt.compare(password, user.password);

            if (flag) {
                const token = jwt.sign({
                    userId: user._id.toString()
                }, JWT_ADMIN_PASSWORD);

                res.json({
                    msg: "signin successful",
                    token: token
                });
            } else {
                res.status(403).json({
                    msg: "invalid credentials"
                });
            }
        } else {
            res.status(403).json({
                msg: "invalid credentials"
            });
        }
    } catch (error) {
        res.status(500).json({
            msg: "internal server error",
            error: error.message
        });
    }
});

adminRouter.post('/course',adminmiddleware,async function(req,res){
    const adminId = req.userId;

    const { title, description, imageUrl, price } = req.body;

    const course = await courseModel.create({
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price, 
        creatorId: adminId
    })

    res.json({
        message: "Course created",
        courseId: course._id
    })
})

adminRouter.put('/course',adminmiddleware,async function(req,res){
    const adminId = req.userId;

    const { title, description, imageUrl, price , courseId} = req.body;

    const course = await courseModel.findOne({
        _id: courseId,
        creatorId: adminId
    })
    if(!course)
    {
        res.status(411).json({
            msg:"you are barred"
       })
       return;
    }
    else
    {
        await courseModel.updatOne(
            {
                _id: courseId,
            },
        {
            title: title, 
            description: description, 
            imageUrl: imageUrl, 
            price: price, 
            creatorId: adminId
        })

        res.json({
            message: "Course created",
            courseId: course._id
        })
    }
        

    
})

adminRouter.get('/bulk', adminmiddleware, async function(req, res) {
    try {
        const adminId = req.userId;

        const courses = await courseModel.find({
            creatorId: adminId
        });

        if (courses.length === 0) {
            res.json({
                msg: "no courses created"
            });
        } else {
            res.json({
                courses: courses
            });
        }
    } catch (error) {
        res.status(500).json({
            msg: "internal server error",
            error: error.message
        });
    }
});


module.exports = { adminRouter: adminRouter };

