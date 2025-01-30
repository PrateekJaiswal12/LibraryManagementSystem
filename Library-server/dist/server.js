import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';

import { config } from '../src/configs/index.js';
import authRoutes from '../src/routes/AuthRoutes.js';
import userRoutes from "../src/routes/UserRoutes.js"

configDotenv();

const app = express();
const PORT = config.server.port;

// Middlewares
app.use(cors()); 
app.use(express.json()); 

// Database Connection
async function dbconnection() {
  try {
    const connectionInstance = await mongoose.connect(config.mongo.url);
    console.log('MongoDB connected:', connectionInstance.connection.host);
  } catch (error) {
    console.error('DB Connection Failed', error);
    throw error;
  }
}

// Start the server after DB connection
dbconnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}...`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection failure:', error);
  });

// Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.status(200).json('Server is running fine');
});
