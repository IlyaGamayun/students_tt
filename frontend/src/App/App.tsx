import React, { useState } from 'react';
import StudentsList from '../features/students/StudentsList';
import Student from '../features/students/types/Student';
import './App.css';

function App() : JSX.Element {
  return (
    <div className="App">

      <StudentsList />
    </div>
  );
}

export default App;
