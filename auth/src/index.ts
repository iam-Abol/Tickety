import express from "express";

const app = express();

app.use(express.json());

app.get("/api/users/currentuser", (req, res) => {
  res.send("HIiiiii testing ");
});

app.listen(3000, () => {
  console.log("listening on port 3000!");
});
