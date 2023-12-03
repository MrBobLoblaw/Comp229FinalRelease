const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const cors = require('cors');
const UserRoutes = require('./routes/userRoutes');
const jwt = require('jsonwebtoken')
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


// MongoDB configuration
mongoose.connect("mongodb://localhost:27017/Survey", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/', UserRoutes);

app.get('/', (req, res) => {
  res.send("Welcome to Student Survey");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});