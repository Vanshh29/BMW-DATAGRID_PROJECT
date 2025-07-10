const express = require('express');
const connectDB = require('./config/db');
const dataRoutes = require('./routes/dataRoutes');
const cors = require('cors');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());



// Routes
app.use('/api/data', dataRoutes);

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
