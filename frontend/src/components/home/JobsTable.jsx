import React from 'react'
import { format } from 'date-fns';


function JobsTable({jobs}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Position</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
      {jobs.map((item, index) => (
         <tr key={index}> 
          <td>{item.company}</td>
          <td>{item.position}</td>
          <td>{item.status}</td>
          <td>{format(new Date(item.date), 'dd/MM/yyyy')}</td>
        </tr> ))}
      </tbody>
    </table>
  )
}

export default JobsTable