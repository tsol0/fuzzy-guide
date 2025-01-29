import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

export const EditJob = () => {

  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState('');
  const nav = useNavigate();
  const {id} = useParams();

  useEffect(
    () => {
      setLoading(true);
      axios
      .get(`http://localhost:5555/jobs/${id}`)
      .then( (response) => {
        setCompany(response.data.company);
        setPosition(response.data.position);
        setStatus(response.data.status);
        setDate(response.data.date);
        setLoading(false);
      }).catch((error) =>{
        setLoading(false);
        alert('An error has occured');
        console.log(error);
      })
    }
  , [])

  const handleEditJob = () => {
    const data = {
      company,
      position,
      status,
      date
    };

    setLoading(true);
    axios
    .put(`http://localhost:5555/jobs/${id}`, data)
    .then(() => {
      setLoading(false);
      nav('/');
    }).catch((err) =>{
      setLoading(false);
      console.log(err)
    });
  };

  return (
    <div>
      {loading? <Spinner />: ""}
      <div className='p-6'>
        <label htmlFor="company">Company</label>
        <input type="text" name="company" value={company} onChange={(e) => setCompany(e.target.value)} /><br />
        <label htmlFor="position">Position</label>
        <input type="text" name="position" value={position} onChange={(e) => setPosition(e.target.value)} /> <br/>
        <label htmlFor="status">Status</label>
        <input type="text" name="status" value={status}
        onChange={(e) => setStatus(e.target.value)} /> <br/>
        <label htmlFor="date">Date</label>
        <input type="text" name="date" value={date}
        onChange={(e) => setDate(e.target.value)} hidden />
        <button onClick={handleEditJob}>Save</button>
      </div>
    </div>
  )
}

export default EditJob;