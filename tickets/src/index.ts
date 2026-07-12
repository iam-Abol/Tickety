import mongoose from "mongoose";
import { app } from "./app";
import { natsWrapper } from "./nats-wrapper";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defind");
  }
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defind");
  }
  try {
    await natsWrapper.connect("tickety", "testest", "http://nats-srv:4222");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connectd to tickets mongo db");
  } catch (error) {
    console.error(error);
  }

  app.listen(3000, () => {
    console.log("listening on port 3000!");
  });
};

start();
