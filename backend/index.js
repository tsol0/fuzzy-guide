import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

import { Job } from "./model/jobModel.js";

const app = express();

// middleware for parsing request body
app.use(express.json());

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Wakanda Welcome');
});

app.post('/jobs', async (request, response) => {
  try {
    if (!request.body.company ||
    !request.body.position ||
    !request.body.status ||
    !request.body.date) {
      return response.status(400).send({message: 'Send all required fields: company, position, staus, date'});
    }

    const newJob = {
      company: request.body.company,
      position: request.body.position,
      status: request.body.status,
      date: request.body.date,
    }

    const job = await Job.create(newJob);
    return response.status(201).send(job);

  } catch (error) {
    console.log(error.message);
    response.status(500).send({message: error.message})
  }
});


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

