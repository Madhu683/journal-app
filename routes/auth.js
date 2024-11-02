const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const {JWT_SECRET} = process.env;

//Register a new user
router.post('/register',async(req,res)=>{
    try{
        const {username,password} = req.body;
        const user = new User({username,password});
        await user.save();
        res.status(201).json({message:'User created successfully'});
    }catch(error){
        res.status(400).json({error:error.message});
    }
});

//Login user
router.post('/login',async(req,res)=>{
    try{
        const {username,password} = req.body;
        const user = await User.findOne({username});
        if(!user || !(await bcrypt.compare(password,user.password)))
        {
            return res.status(400).json({message:'Invalid Credentials'});
        }

        const token = jwt.sign({id:user._id},JWT_SECRET,{expiresIn:'1h'});
        res.json({token});
    } catch(error){
        res.status(500).json({error:error.message});
    }
});

module.exports = router;

