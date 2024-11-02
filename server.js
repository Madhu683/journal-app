require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const journalRoutes = require('./routes/journal');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

//Connect to MongoDB
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true})
        .then(()=>console.log('MongoDB connected'))
        .catch((error)=> console.error('MongoDB connection error',error));
//Routes
app.use('/api/journal',journalRoutes);
app.use('/api/auth',authRoutes);

//Start server
app.listen(PORT, ()=>console.log(`server running on port ${PORT}`));
