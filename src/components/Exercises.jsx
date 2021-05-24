import React, { useState, useEffect } from 'react';

const Exercises = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch('http://localhost:5000/exercise');

      let data = await response.json();

      console.log(data);
      setExercises(data);
    };

    fetchData();
  }, []);
  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th scope='col'>Username</th>
          <th scope='col'>Description</th>
          <th scope='col'>Duration</th>
          <th scope='col'>Date</th>
          <th scope='col'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {exercises.length ? (
          exercises.map((exercise) => {
            return (
              <tr key={exercise.id}>
                <td> {exercise.username} </td>
                <td> {exercise.description} </td>
                <td> {exercise.duration} </td>
                <td> {exercise.date} </td>
                <td> {exercise.date} </td>
              </tr>
            );
          })
        ) : (
          <h1>Bye</h1>
        )}
      </tbody>
    </table>
  );
};

export default Exercises;
