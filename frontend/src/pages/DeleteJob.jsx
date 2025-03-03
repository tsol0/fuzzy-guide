import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

function DeleteJob() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();

  function handleDeleteJob() {
    setLoading(true);
    axios
    .delete(`http://localhost:5555/jobs/${id}`)
    .then(
      () => {
        setLoading(false);
        navigate('/');
      }
    )
    .catch(
      (err) => {
        setLoading(false);
        console.log("An error occured");
        console.log(err);
      }
    )
  }

  return (
    <section className='p-4'>
      <div className='p-3 bg-blue-100 w-1/3'>
        <h1 className='text-3xl mb-2'>Delete Job</h1>
        {loading ? <Spinner /> : ""}
        <div className='flex flex-col items-center border-2 border-blue-300 rounded-xl w-[600px] p-8 mx-auto'>
          <h3 className='text-2xl'>Are you sure you want delete to this job?</h3>
          <button className='p-4 bg-blue-300 text-white m-4 rounded-xl' type="button" onClick={handleDeleteJob}>Yes, delete it</button>
        </div>
      </div>
    </section>
  )
}

export default DeleteJob