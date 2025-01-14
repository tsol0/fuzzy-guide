import e from "express";
import { Job } from "../model/jobModel.js";

const router = e.Router();

// add new job
router.post('/', async (request, response) => {
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

// get all jobs
router.get('/',
  async (request, response) => {
    try {
      const jobs = await Job.find({});
      return response.status(200).json({
        count: jobs.length,
        data: jobs
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({message: error.message});
    }
  }
);

// get job by id
router.get('/:id',
  async (request, response) => {
    try {
      const {id} = request.params;

      const job = await Job.findById(id);
      return response.status(200).json(job);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({message: error.message});
    }
  }
);

// update a job using the id
router.put('/:id',
  async (request, response) => {
    try {
      if (!request.body.company ||
        !request.body.position ||
        !request.body.status ||
        !request.body.date) {
          return response.status(400).send({message: 'Send all required fields: company, position, status, date'});
        }

      const { id } = request.params.id;
      const result = await Job.findByIdAndUpdate(id, request.body);

      if (!result) {
        return response.status(404).json({message:'Job does not exist'});
      } else return response.status(200).send({message: 'Job updated successfully'});

    } catch (error) {
      console.log(error.message);
      response.status(500).send({message: error.message});
    }
  }
);

router.delete('/:id',
  async (request, response) => {
    try {

      const { id } = request.params;
      const result = await Job.findByIdAndDelete(id);

      if (!result) {
        return response.status(404).json({message:'Job does not exist'});
      } else return response.status(200).send({message: 'Job deleted successfully'});

    } catch (error) {
      console.log(error.message);
      response.status(500).send({message: error.message});
    }
  }
);

export default router;