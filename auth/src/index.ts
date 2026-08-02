import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  console.log("test");
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defind");
  }
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defind");
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to mongo db");
  } catch (error) {
    console.error(error);
  }

  app.listen(3000, () => {
    console.log("listening on port 3000!");
  });
};

start();
