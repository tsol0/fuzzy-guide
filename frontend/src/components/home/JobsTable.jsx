import React from 'react'
import { format } from 'date-fns';
import { AiOutlineEdit} from 'react-icons/ai';
import { MdOutlineDelete} from 'react-icons/md';
import { Link } from 'react-router-dom';



function JobsTable({jobs}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Position</th>
          <th>Status</th>
          <th>Date</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
      {jobs.map((item, index) => (
         <tr key={index}> 
          <td>{item.company}</td>
          <td>{item.position}</td>
          <td>{item.status}</td>
          <td>{format(new Date(item.date), 'dd/MM/yyyy')}</td>
          <td>
            <Link to={`/jobs/delete/${item._id}`}>
            <MdOutlineDelete></MdOutlineDelete>
            </Link>
            <Link to={`/jobs/edit/${item._id}`}>
            <AiOutlineEdit></AiOutlineEdit>
            </Link>
          </td>
        </tr> ))}
      </tbody>
    </table>
  )
}

export default JobsTable