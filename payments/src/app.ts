import express from "express";
import "express-async-errors";
import { errorHandler, NoteFoundError, currentUser } from "@zayatickety/common";
import cookieSession from "cookie-session";

const app = express();
app.set("trust proxy", true);
app.use(express.json());
app.use(
  cookieSession({ signed: false, secure: process.env.NODE_ENV !== "test" }),
);

app.use(currentUser);

////////////////

app.all("*", async (req, res, next) => {
  throw new NoteFoundError();
});

app.use(errorHandler);

export { app };
