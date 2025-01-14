import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

import jobsRoute from "./routes/jobsRoute.js";

const app = express();

// middleware for parsing request body
app.use(express.json());

app.use('/jobs', jobsRoute);

mongoose
.connect(mongoDBURL)
.then(
  () => {
    console.log("App connected to database");

    app.listen(PORT, () => {
      console.log(`App is listening to port ${PORT}`);
    });
  }
)
.catch(
  (error)=>{
    console.log(error);
  }
);

