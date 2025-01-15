import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import CreateJob from './pages/createJob';
import DeleteJob from './pages/deleteJob';
import EditJob from './pages/editJob';
import ShowJob from './pages/ShowJob';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/jobs/create' element={<CreateJob />} />
      <Route path='/jobs/delete/:id' element={<DeleteJob/>} />
      <Route path='/jobs/edit/:id' element={<EditJob/>} />
      <Route path='/jobs/details/:id' element={<ShowJob/>} />
    </Routes>
  )
}
