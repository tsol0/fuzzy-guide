import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";

import jobsRoute from "./routes/jobsRoute.js";

const app = express();


// middleware for parsing request body
app.use(express.json());

// middleware for handling CORS Policy
// Opt 1: Allow Origins with Default of cors(*)
// app.use(cors());
// Opt 2: Allow Custom
app.use(cors(
  {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  }
))

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

