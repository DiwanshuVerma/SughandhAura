
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());

// connect DB

const dbURI = process.env.MONGO_URI
const renderURL = process.env.renderURL

mongoose.connect(dbURI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });

// Routes
const reviewRoutes = require('./routes/reviewRoutes');
app.use('/reviews', reviewRoutes);


// refresh server in every 10 mins
const refreshServer = async () => {
    try{
        const res = await fetch(renderURL)
    } catch(err){
        console.log('error restaring server', err)
    }
}
setInterval(refreshServer, 600000) // 10 mins

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
