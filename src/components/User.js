
import React, { useState, useEffect, useCallback } from "react";
import { useParams } from 'react-router-dom'

function User() {
  const [singleStudent, setSingleStudent] = useState([])
  const { userId } = useParams()

  let url = 'http://localhost:8080/api/student'

  const fetchOneStudent = useCallback(async () => {
    const student = await fetch(`${url}/${userId}`)
    const data = await student.json()
    setSingleStudent(data.students)
    console.log(data.students);
  }, [userId, url])

  useEffect(() => {
    fetchOneStudent()
  }, [fetchOneStudent])

  const listSingleStudents = singleStudent.map((student) => {
    return (
      <main key={student.id}>
        <h2>Name: <span>{student.name}</span></h2>
        <h1>Sex: <span className={student.sex === 'F' ? 'female' : 'male'}>{student.sex}</span></h1>
        <h2>Age: <span>{student.age}</span> </h2>
        <h2>location: <span>{student.location}</span></h2>
        <h2>program: <span>{student.program}</span></h2>
      </main>
    )
  }
  );
  return <div className="single-user">
    {listSingleStudents}
  </div>;
}

export default User;
