import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import {MdOutlineAddBox} from 'react-icons/md';
import JobsTable from '../components/home/JobsTable';



function Home() {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [showType, setShowType] = useState('table');

  useEffect(
    () => {
      setLoading(true);
      axios
      .get('http://localhost:5555/jobs')
      .then((response) =>{
        setJobs(response.data.data);
        setLoading(false);
      })
      .catch((error) =>{
        console.log(error);
        setLoading(false);
      }); 
    }, []
  );
  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Your Job Applications</h1>
        <Link to='/jobs/create'>
        <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div> 
        { loading ? <Spinner /> : <JobsTable jobs={jobs} />}

    </div>
  )
}

export default Home