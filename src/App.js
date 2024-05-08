import './App.css';
import React, {useState} from 'react';
//Components
import Form from './components/form/Form';
import Students from './components/students/Students';

function App() {

  const [ students, setStudents] = useState([]);

  const addStudent = newStudent => setStudents([...students, newStudent])

  return (
    <div>
      <Form addStudent= {addStudent} />
      <Students students={students}/>
    </div>
  );
}

export default App;
