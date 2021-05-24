import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const CreateExercise = () => {
  const [exercise, setExercise] = useState({
    username: null,
    description: '',
    duration: '',
    date: '',
  });

  const [users, setUsers] = useState([]);

  const [error, setError] = useState('');

  let history = useHistory();

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch('http://localhost:5000/user');

      let data = await response.json();

      setUsers(data);
    };
    fetchData();
  }, []);

  const onChange = (e) => {
    setExercise({ ...exercise, [e.target.name]: e.target.value });
  };

  const formSubmit = async (e) => {
    try {
      e.preventDefault();

      if (exercise.username === null) {
        setError('Select a username');
        setTimeout(() => {
          setError('');
        }, 3000);
      } else {
        let form = {
          username: exercise.username,
          duration: exercise.duration,
          description: exercise.description,
          date: exercise.date,
        };

        console.log(form);
        await fetch('http://localhost:5000/exercise/add', {
          method: 'POST',
          body: JSON.stringify(form),
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });

        await setExercise({ ...exercise, username: null, description: '', duration: '', date: '' });

        history.push('/');
      }
    } catch (error) {
      console.log(`Error : ${error.message}`);
    }
  };

  return (
    <div>
      {error && (
        <div className='alert alert-danger' role='alert'>
          {error}
        </div>
      )}

      <form onSubmit={formSubmit}>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Select a username
          </label>
          <select
            className='form-select'
            aria-label='Default select example'
            value={exercise.username}
            name='username'
            onChange={(e) => {
              onChange(e);
            }}
            required
          >
            <option selected disabled>
              Select a user
            </option>
            {users.length
              ? users.map((user) => {
                  return (
                    <option key={user._id} value={user.username}>
                      {user.username}
                    </option>
                  );
                })
              : null}
          </select>
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Description
          </label>
          <input
            type='text'
            value={exercise.description}
            name='description'
            className='form-control'
            id='exampleInputPassword1'
            onChange={(e) => {
              onChange(e);
            }}
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Duration
          </label>
          <input
            type='number'
            name='duration'
            value={exercise.duration}
            className='form-control'
            id='exampleInputPassword1'
            onChange={(e) => {
              onChange(e);
            }}
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Date
          </label>
          <input
            type='date'
            name='date'
            value={exercise.date}
            className='form-control'
            id='exampleInputPassword1'
            onChange={(e) => {
              onChange(e);
            }}
            required
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Create Exercise
        </button>
      </form>
    </div>
  );
};

export default CreateExercise;
