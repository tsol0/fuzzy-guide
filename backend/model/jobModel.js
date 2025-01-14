import mongoose from "mongoose";


const jobSchema = mongoose.Schema(
  {
    // _id: { type: ObjectId, required: false },
    company: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
  }
);

export const Job = mongoose.model('Job', jobSchema);