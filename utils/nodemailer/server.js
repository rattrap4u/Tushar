// server.js
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Endpoint to handle form submission
app.post('/send', async (req, res) => {
    const { name, contactNumber, email, message } = req.body;

    // Create a transporter object using Gmail service
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });

    // Email options
    const mailOptions = {
        from: email, // Sender address
        to: process.env.RECEIVER_EMAIL, // Your email address to receive messages
        subject: `Contact Form Submission from ${name}`,
        text: `Name: ${name}\nContact Number: ${contactNumber}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send email.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});