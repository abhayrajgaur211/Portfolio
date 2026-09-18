import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email and message are required." });
    }

    const contact = await Contact.create({ name, email, subject, message });
    return res.status(201).json({ message: "Message saved.", id: contact._id });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Unable to save message." });
  }
});

export default router;