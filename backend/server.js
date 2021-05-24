const express = require('express');
const cors = require('cors');
const connectDB = require('./config/Database');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
