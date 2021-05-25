import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Exercises = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch('http://localhost:5000/exercise');

      let data = await response.json();

      setExercises(data);
    };

    fetchData();
  }, []);

  const deleteExercise = async (id) => {
    console.log(id);
    await fetch(`http://localhost:5000/exercise/remove/${id}`, {
      method: 'DELETE',
    });

    window.location.reload();
  };

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
        {exercises.length
          ? exercises.map((exercise) => {
              return (
                <tr key={exercise._id}>
                  <td> {exercise.username} </td>
                  <td> {exercise.description} </td>
                  <td> {exercise.duration} </td>
                  <td> {exercise.date} </td>
                  <td>
                    {' '}
                    <div className='btn-group' role='group' aria-label='Basic outlined example'>
                      <button type='button' className='btn btn-outline-primary'>
                        <Link to={`/exercise/${exercise._id}`}>Edit</Link>
                      </button>
                      <button
                        onClick={() => {
                          deleteExercise(exercise._id);
                        }}
                        type='button'
                        className='btn btn-outline-danger'
                      >
                        Delete
                      </button>
                    </div>{' '}
                  </td>
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
};

export default Exercises;
