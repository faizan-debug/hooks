import React from 'react'
import StudentItem from './StudentItem'

const Students = ({students}) => {
  return (
    <div>
        <h2>Students</h2>
        {
            students.length === 0 && (
                <p>No students found!</p>
            )
        }
        <ul>
            {
                students.map ((student, index) => <StudentItem key={index} index={index} student={student}/>)
            }
        </ul>
       
      
    </div>
  )
}

export default Students
