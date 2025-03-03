import React from 'react'
import { format } from 'date-fns';
import { AiOutlineEdit} from 'react-icons/ai';
import { MdOutlineDelete} from 'react-icons/md';
import { Link } from 'react-router-dom';



function JobsTable({jobs}) {
  return (
    <table className=' w-1/2 border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border-2 border-blue-400 rounded-md'>Company</th>
          <th className='border-2 border-blue-400 rounded-md'>Position</th>
          <th className='border-2 border-blue-400 rounded-md'>Status</th>
          <th className='border-2 border-blue-400 rounded-md'>Date</th>
          <th className='border-2 border-blue-400 rounded-md'>Options</th>
        </tr>
      </thead>
      <tbody className='border-2 border-green-700'>
      {jobs.map((item, index) => (
         <tr key={index} > 
          <td>{item.company}</td>
          <td>{item.position}</td>
          <td>{item.status}</td>
          <td>{format(new Date(item.date), 'dd/MM/yyyy')}</td>
          <td className='flex flex-row'>
            <Link className='ml-2 mr-3 text-xl text-red-700' to={`/jobs/delete/${item._id}`}>
            <MdOutlineDelete></MdOutlineDelete>
            </Link>
            <Link className='text-xl text-green-800' to={`/jobs/edit/${item._id}`}>
            <AiOutlineEdit></AiOutlineEdit>
            </Link>
          </td>
        </tr> ))}
      </tbody>
    </table>
  )
}

export default JobsTable