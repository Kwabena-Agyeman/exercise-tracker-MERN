import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreateUser = () => {
  const [user, setUser] = useState('');

  let history = useHistory();

  const onChange = (e) => {
    setUser(e.target.value);
  };

  const formSubmit = async (e) => {
    try {
      e.preventDefault();

      let username = user;
      await fetch(`http://localhost:5000/user/add`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ username: username }),
      });

      history.push('/');
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Enter new user
          </label>
          <input
            type='text'
            value={user}
            name='description'
            className='form-control'
            id='exampleInputPassword1'
            onChange={(e) => {
              onChange(e);
            }}
            required
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
