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
    <section className='p-4'>
      <div className='flex flex-row justify-between pb-3'>
        <h1 className='text-3xl'>My Job Apps</h1>
        <Link to='/jobs/create'>
          <MdOutlineAddBox className='text-sky-600 text-4xl'/>  
        </Link>
      </div> 
      <div className="flex justify-center border-2 border-blue-400 mr-6 ml-6 rounded-md p-2">
        { loading ? <Spinner /> : <JobsTable jobs={jobs} />}
      </div>

    </section>
  )
}

export default Home