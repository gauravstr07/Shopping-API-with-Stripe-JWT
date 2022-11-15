const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(`connected to database..💾`);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`server running on port: ${port}📡`);
});
