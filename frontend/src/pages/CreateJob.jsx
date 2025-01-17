import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/creating.css';

function CreateJob() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [appStatus, setAppStatus] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();

  const handleChanage = () =>{
    const data = {
      company,
      position,
      appStatus,
      date
    };
    setLoading(true);
    axios.post("http://localhost:5555/jobs")
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
    <div className='container'>
      <h1>Job application information form</h1>
      <label htmlFor="company">Company</label>
      <input type="text" value={company}/>
    </div>
  )
}

export default CreateJob