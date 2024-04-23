import express from 'express';
import multer from 'multer';
import { Mens } from '../models/menModel';

const router = express.Router();

// Multer configuration for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const mens = new Mens({
      title: req.body.title,
      price: req.body.price,
   
      // Save the uploaded image data and content type
      image: {
        data: req.file.buffer,
        contentType: req.file.mimetype
      }
    });
    await mens.save();
    res.status(201).send(mens);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error uploading image.");
  }
});

export default router;