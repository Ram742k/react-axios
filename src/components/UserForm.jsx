import React, { useState, useEffect } from 'react';

const UserForm = ({ onSubmit, initialUser }) => {
  const [user, setUser] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    if (initialUser) {
      setUser(initialUser);
    }
  }, [initialUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
    setUser({ name: '', email: '', phone: '' });
  };

  return (
    <div className='user-card'>
        <div className='card '>
      <h2 className='mb-5'>{initialUser ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-4">
          <label className="col-sm-4 form-label">First name</label>
          <div className='col-sm-8'>
            <input type="text" className="form-control" name="name" onChange={handleChange} value={user.name} required />
          </div>
        </div>
        <div className="row mb-4">
          <label className="col-sm-4 form-label">Email</label>
          <div className='col-sm-8'>
            <input type="email" className="form-control" name="email" onChange={handleChange} value={user.email} required />
          </div>
        </div>
        <div className="row mb-4">
          <label className="col-sm-4 form-label">Phone</label>
          <div className='col-sm-8'>
            <input type="tel" className="form-control" name="phone" onChange={handleChange} value={user.phone} required />
          </div>
        </div>
        <button type="submit" className='btn btn-light w-100 mb-3'>Submit</button>
      </form>
    </div>

    </div>
  );
};

export default UserForm;
