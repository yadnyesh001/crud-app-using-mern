const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const userRoute = require('./routes/userRoute');

app.use(express.json());
app.use(userRoute);

mongoose.connect(process.env.URI).
then(() => {
  console.log('Connected to MongoDB');
}).
catch((error) => {
  console.log('Error:', error);
});

app.listen(process.env.PORT || 8000, (err) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('Server is running on port', process.env.PORT || 8000);
  }
});