const mongoose = require('mongoose');
const config = require('config');

const db = config.get('Mongo URI');
const connectDB = async () => {
  try {
    // pass out mongoURI into connect function
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log('MongoDB connected');
  } catch (error) {
    console.error(error.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
