require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const courseRoute = require("./routes/courseroute");


const App = express();
App.use(express.json());

App.use("/course", courseRoute);


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    App.listen(process.env.PORT, () => {
      console.log(
        `Database Connected and server is listening http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
