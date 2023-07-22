const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

mongoose
  .connect(process.env.MONGO_URL)

  .then(() => console.log("DB connected "))

  .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);
