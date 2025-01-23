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
    <div>
      <h1>Delete Book</h1>
      <div>
        {loading ? <Spinner /> : ""}
        <h3>Are you sure you want to this job</h3>
        <button type="button" onClick={handleDeleteJob}>Yes, delete it</button>
      </div>
    </div>
  )
}

export default DeleteJob