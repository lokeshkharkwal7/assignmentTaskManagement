const mongoose = require('mongoose');
const uri =  "mongodb+srv://lokeshkharkwal:lokeshkharkwal@cluster0.jg63n0l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to the Database');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

module.exports = connectToMongoDB;

