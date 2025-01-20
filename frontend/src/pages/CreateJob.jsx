import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/creating.css';
import Spinner from '../components/Spinner';

function CreateJob() {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState('');
  const navigate = useNavigate();

  const handleChanage = () =>{
    const data = {
      company,
      position,
      status,
      date
    };
    setLoading(true);
    axios
    .post("http://localhost:5555/jobs", data)
    .then(
        () => {
          setLoading(false);
          console.log("User Created succesfuly");
          navigate('/');
        }
      )
    .catch(
        (error) =>{
          alert("The error happened. Please check console");
          setLoading(false);
          console.log(error);
        }
      )
  } 
  return (
    <div>
      {loading ? <Spinner /> : ''}
      <div className='container'>
      <h1>Job Details Capture</h1>
      <label htmlFor="company">Company:</label>
      <input type="text" value={company} 
      onChange={(e) =>setCompany(e.target.value)} />
      <label htmlFor="position">Position:</label>
      <input type="text" value={position}
      onChange={ e => setPosition(e.target.value)}/>
      <label htmlFor="status">Status:</label>
      <input type="text" value={status}
      onChange={ e => setStatus(e.target.value)}  />
      <label htmlFor="date">Date:</label>
      <input type="date" value={date}
      onChange={ e => setDate(e.target.value)} />
      <button type='button' onClick={handleChanage}>Save</button>
      </div>
    </div>
  )
}

export default CreateJob