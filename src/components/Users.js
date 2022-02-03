import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom'

function Users() {
  const [students, setStudents] = useState([])

  let url = 'http://localhost:8080/api/students'

  const fetchData = useCallback(async () => {
    const student = await fetch(url)
    const data = await student.json()
    setStudents(data.students)
  }, [url])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const listStudents = students.map((student) => {
    return (
      <li key={student.id}>
        <h3>{student.name}</h3>
        <h2 className={student.sex === 'F' ? 'female' : 'male'}>{student.sex}</h2>
        <Link to={`user/${student.id}`}>see more</Link>
      </li>
    )
  });

  return <div className='container'>
    <ul>
      {listStudents}
    </ul>
  </div>;
}

export default Users;

