import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(5600, () => {
  console.log(`Example app listening on port`);
});
