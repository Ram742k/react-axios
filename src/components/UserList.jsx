import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import api from '../api';
import UserForm from './UserForm';
import Loader from './Loader';

const UserList = ({ users, setUsers, isLoading, onUserUpdated }) => {
  const [editingUser, setEditingUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const deleteUser = async (id) => {
    const result = window.confirm("Are you sure you want to delete this user?");
        if(result){
    try {
      await api.delete(`/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }
  };

  const updateUser = async (updatedUser) => {
    try {
      const response = await api.put(`/${updatedUser.id}`, updatedUser);
      onUserUpdated(response.data);
      setEditingUser(null);
      setShowModal(false); // Close modal after update
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const startEditing = (user) => {
    setEditingUser(user);
    setShowModal(true); // Show modal when editing starts
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h1 className='text-center mt-5 text-white'>User List</h1>
      <div className='card card-userlist p-3'>
        <div className='table-responsive'>
          <table className='table table-bordered mt-4'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <div className='m-2'>
                      <button className='btn btn-sm btn-outline-primary m-1' onClick={() => startEditing(user)}>Edit</button>
                      <button className='btn btn-sm btn-outline-danger m-1' onClick={() => deleteUser(user.id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editingUser && <UserForm onSubmit={updateUser} initialUser={editingUser} />}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserList;
