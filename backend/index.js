
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

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
