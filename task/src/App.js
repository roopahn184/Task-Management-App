import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Task from './components/Task';
import Login from './components/Login'

function App() {
  return (
    <Router>
      <Header />
    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route  path='/task' element={<Task />} />
      </Routes>
   </Router> 
  );
}

export default App;
