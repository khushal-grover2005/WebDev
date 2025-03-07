const express = require("express");
const userRouter = express.Router();
const { userModel, purchaseModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const  { JWT_USER_PASSWORD } = require("../config");
const { userMiddleware } = require("../middleware/user");



const zod= require("zod");
const bcrypt= require("bcrypt");

const emailschema= zod.string().email();
const passwordschema= zod.string().min(6);

userRouter.post('/signup', async function(req, res) {
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

        await userModel.create({
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

userRouter.post('/signin', async function(req, res) {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({
            email: email
        });

        if (user) {
            const flag = await bcrypt.compare(password, user.password);

            if (flag) {
                const token = jwt.sign({
                    userId: user._id.toString()
                }, JWT_USER_PASSWORD);

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

userRouter.get("/purchases",userMiddleware,async function(req, res) {
    const userId = req.userId;

    const purchases = await purchaseModel.find({
        userId,
    });

    let purchasedCourseIds = [];

    for (let i = 0; i<purchases.length;i++){ 
        purchasedCourseIds.push(purchases[i].courseId)
    }

    const coursesData = await courseModel.find({
        _id: { $in: purchasedCourseIds }
    })

    res.json({
        purchases,
        coursesData
    })
})

module.exports = {
    userRouter: userRouter
}