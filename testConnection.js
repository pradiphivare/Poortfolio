const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

const clientOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

async function run() {
  try {
    // Connect to MongoDB
    await mongoose.connect(uri, clientOptions);
    console.log("Successfully connected to MongoDB!");

    // Perform a simple command to verify the connection
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}

run();