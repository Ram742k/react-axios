import React from 'react';
import UserForm from './UserForm';
import api from '../api';

const AddUser = ({ onUserAdded }) => {
  const addUser = async (user) => {
    try {
      const response = await api.post('/', user);
      onUserAdded(response.data);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div >
      
      <UserForm onSubmit={addUser} />
    </div>
  );
};

export default AddUser;
