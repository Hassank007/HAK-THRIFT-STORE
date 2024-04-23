import mongoose from "mongoose";

const MenSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },

    // Define a field to store the image
    image: {
      data: Buffer,
      contentType: String
    }
  },
  {
    timestamps: true,
  }
);

export const Mens = mongoose.model("Mens", MenSchema);
