import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      console.error('Validation error: Missing required fields');
      return res.status(400).send('Validation error: Missing required fields');
    }

    if (!mongoose.connection.readyState) {
      try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Successfully connected to MongoDB!");
      } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        return res.status(500).send('Failed to connect to database');
      }
    }

    const newContact = new Contact({ name, email, message });

    try {
      await newContact.save();
      console.log("Message saved to database");
      res.status(200).send('Message received and saved to database');
    } catch (error) {
      console.error('Error saving message to database:', error);
      res.status(500).send('Failed to save message to database');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
};
```
MONGODB_URI=mongodb+srv://pradiphivare2510:Pradip@cluster0.k7mjk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0