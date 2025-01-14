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
      <Route paths='/' element={<Home />} />
      <Route paths='/jobs/create' element={<CreateJob />} />
      <Route paths='/jobs/delete/:id' element={<DeleteJob/>} />
      <Route paths='/jobs/edit/:id' element={<EditJob/>} />
      <Route paths='/jobs/details/:id' element={<ShowJob/>} />
    </Routes>
  )
}
