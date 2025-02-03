import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import '../css/creating.css';
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
    // used for communication with the backend
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
    <div className='m-12'>
      {loading ? <Spinner /> : ''}

      <div className='flex flex-col items-center bg-blue-400 p-5 rounded-lg'>

      <h1 className='text-3xl'>Job Details Capture</h1>
      
      <div className='pt-3 flex flex-col'>
      <label htmlFor="company">Company:</label>
      <input required type="text" value={company} 
      onChange={(e) =>setCompany(e.target.value)} />
      </div>

      <div className='pt-3 flex flex-col'>
      <label htmlFor="position">Position:</label>
      <input type="text" value={position}
      onChange={ e => setPosition(e.target.value)}/>
      </div>

      <div className='pt-3 flex flex-col'>
      <label htmlFor="status">Status:</label>
      <input type="text" value={status}
      onChange={ e => setStatus(e.target.value)}  />
      </div>

      <div className='pt-3 pb-3 flex flex-col'>
      <label htmlFor="date">Date:</label>
      <input type="date" value={date}
      onChange={ e => setDate(e.target.value)} />
      </div>

      <button className='border-4 border-solid p-4 rounded-lg text-white text-xl' onClick={handleChanage}>Save</button>

      </div>
    </div>
  )
}

export default CreateJob