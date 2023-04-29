const mongoose = require('mongoose');
const express = require('express');
const { TaskModel } = require('../Models/Task.model');
const { UserModel } = require('../Models/user.model');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { authenticate } = require('../Middleware/authetication.mw');
const taskRouter = express.Router();
taskRouter.get("/", (req, res) => {
    res.send("This is the homepage")
})
taskRouter.post("/register", async (req, res) => {
    // console.log(req.body)

    bcrypt.hash(req.body.password, 3, async function (err, hash) {
        try {
            await UserModel.insertMany([{ ...req.body, password: hash }]);
            res.send({ msg: "User registerd" })
        } catch (error) {
            res.status(404).json({ "err": err, "err2": error })
        }
    });
})
taskRouter.get('/getUser', authenticate, async (req, res) => {
    res.send(await UserModel.findById({ _id: req.body.userId }).populate("todosId"))
})
taskRouter.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {


        let userData = await UserModel.findOne({ username })
        bcrypt.compare(password, userData.password, function (err, result) {
            if (result) {
                var token = jwt.sign({ userID: userData._id }, 'shhhhh', { expiresIn: '1h' });
                res.json({ msg: "Login success", token: token })
            }
            else {
                res.status(404).json({ msg: "wrong credentials!!!!!!!!" })
            }
            if (err) {
                res.status(404).json({ msg: "some error occured" })
            }
        });
    }
    catch (err) {
        res.status(404).json({ msg: "wrong username/password" })
    }
})
taskRouter.post("/add", authenticate, async (req, res) => {
    await TaskModel.insertMany([req.body]).then(async (id, err) => {
        if (err) {
            console.log(err)
        }
        if (id) {
            let user = await UserModel.findOne({ _id: req.body.userId });
            user.todosId.push(id[0]._id)
            await UserModel.findByIdAndUpdate({ _id: req.body.userId }, user)
        }
    })
    res.json({ msg: "added" })
})
taskRouter.get("/getTodo", authenticate, async (req, res) => {
    res.send(await TaskModel.find({ userId: req.body.userId }));
})
taskRouter.patch("/update/:id", authenticate, async (req, res) => {
    await TaskModel.findByIdAndUpdate({ _id: req.params.id }, req.body);
    res.json({ "msg": "data has been updated" })
})
taskRouter.delete("/delete/:id", authenticate, async (req, res) => {
    await TaskModel.findByIdAndDelete({ _id: req.params.id }, req.body);
    res.json({ "msg": "data has been deleted" })
})
module.exports = { taskRouter }