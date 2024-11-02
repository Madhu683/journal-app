const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userShcema = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
});

//Hash the password before saving
userShcema.pre('save',async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
})

module.exports = mongoose.model('User',userShcema);