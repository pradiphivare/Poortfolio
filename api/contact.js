const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!mongoose.connection.readyState) {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }

    const newContact = new Contact({ name, email, message });

    try {
      await newContact.save();
      res.status(200).send('Message received and saved to database');
    } catch (error) {
      res.status(500).send('Failed to save message to database');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
};