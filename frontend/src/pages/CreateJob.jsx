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
    <section className='w-full h-full flex justify-center p-3'>
      {loading ? <Spinner /> : ''}

      <div className='bg-blue-100 m-4 p-2 border flex flex-col w-1/2 items-center border-2 border-blue-300 rounded-lg'>

        <h1 className='text-3xl mb-2'> Capture Job Details</h1>
        
        <div className='pb-2'>
          <label htmlFor="company">Company:</label>
          <div className="border-2 border-blue-300 rounded-sm">
            <input required type="text" value={company} 
            onChange={(e) =>setCompany(e.target.value)} />
          </div>
        </div>

        <div className='pb-2'>
          <label htmlFor="position">Position:</label>
          <div className="border-2 border-blue-300 rounded-sm">
            <input type="text" value={position}
            onChange={ e => setPosition(e.target.value)}/>
          </div>
        </div>

        <div className='pb-2'>
          <label htmlFor="status">Status:</label>
          <div className="border-2 border-blue-300 rounded-sm">
            <select name="status" id="status" onChange={ e => setStatus(e.target.value)}>
              <option value={"pending"}>Pending</option>
              <option value={"accepted"}>Accepted</option>
              <option value={"rejected"}>Rejected</option>
            </select>
          </div>
        </div>

        <div className='pb-2'>
          <label htmlFor="date">Date:</label>
          <div className="border-2 border-blue-300 rounded-sm">
            <input type="date" value={date}
            onChange={ e => setDate(e.target.value)} />
          </div>
        </div>

        <button className='border-2 border-blue-300 m-1 p-2 rounded-lg text-black text-xl' onClick={handleChanage}>Save</button>

      </div>
    </section>
  )
}

export default CreateJob