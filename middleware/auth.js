const jwt = require('jsonwebtoken');
const {JWT_SECRET} = process.env;

const auth = (req,res,next)=>{
    const token = req.header('Authorization');
    console.log(token); // Correct way to log the token

    if(!token) return res.status(401).json({message:'Access Denied'});

    try{
        const verified = jwt.verify(token.split(" ")[1], JWT_SECRET);
        req.user = verified;
        next();
    }catch(error){
        res.status(400).json({message:'Invalid token'});
    }
};

module.exports = auth;