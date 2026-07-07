import express from "express";
import "express-async-errors";
import { errorHandler, NoteFoundError, currentUser } from "@zayatickety/common";
import cookieSession from "cookie-session";
import { createTicketRouter } from "./routes/new";
import { showTicketRouter } from "./routes/show";
import { indexTicketRouter } from "./routes";
import { updateTicketRouter } from "./routes/update";

const app = express();
app.set("trust proxy", true);
app.use(express.json());
app.use(
  cookieSession({ signed: false, secure: process.env.NODE_ENV !== "test" })
);

app.use(currentUser);

app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(indexTicketRouter);
app.use(updateTicketRouter);

////////////////

app.all("*", async (req, res, next) => {
  throw new NoteFoundError();
});

app.use(errorHandler);

export { app };
