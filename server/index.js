import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import fileRoutes from './routes/file.js';
import userRoutes from './routes/user.js';
import jwt from 'jsonwebtoken';
import { MONGO_URI, PORT } from './constants.js';


// Configuration
const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));
//Routes
app.use('/', userRoutes);
app.use('/', fileRoutes);


// Mongoose setup
mongoose.set('strictQuery', false);
const port = PORT || 6000;
app.listen(port, () => {
  console.log(`Server is running on port number ${port} `);
});

app.get('/', function (req, res) {
  res.send(`Backend is running on port number ${port}`);
});

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log(`conneted to db`);
  })
  .catch((error) => console.log(`${error} -->  did not connect`));
