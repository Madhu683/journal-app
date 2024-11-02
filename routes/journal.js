const express = require('express');
const Journal = require('../models/Journal');
const auth = require('../middleware/auth');
const router = express.Router();

//Create a new journal entry
router.post('/',auth,async (req,res)=>{
    try{
        const journal = new Journal({...req.body,user:req.user.id});
        await journal.save();
        res.status(201).json(journal);
    }catch(error){
        res.status(500).json({error:error.message});
    }
})

//Get all journal entries of the authenticated User
router.get('/',auth,async (req,res)=>{
    try{
        const journals = await Journal.find({user:req.user.id});
        res.json(journals);
    }catch(error){
        res.status(500).json({error:error.message})
    }
});

module.exports = router; 
