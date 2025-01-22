import { MongoClient } from 'mongodb';

export default async (req, res) => {
  const uri = process.env.MONGODB_URI;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Successfully connected to MongoDB!");

    // Perform a simple command to verify the connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    res.status(200).send('Successfully connected to MongoDB!');
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    res.status(500).send(`Failed to connect to MongoDB: ${error.message}`);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};