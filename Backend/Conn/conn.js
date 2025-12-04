const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Ashish:Ashish@cluster0.deljr5p.mongodb.net/', {
      // Mongoose 6/7+ no longer needs useNewUrlParser/useUnifiedTopology.
      // Set your database name explicitly instead.
      dbName: 'test',
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    // process.exit(1); // Do not exit in serverless environment
  }
};
module.exports = connectDB;