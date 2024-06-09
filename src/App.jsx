import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import Navigation from './components/Navigation';
import api from './api';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await api.get('/');
      setUsers(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setIsLoading(false);
    }
  };

  const handleUserAdded = (user) => {
    setUsers([...users, user]);
  };

  const handleUserUpdated = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
  };

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/add" />} />
          <Route path="/add" element={<AddUser onUserAdded={handleUserAdded} />} />
          <Route path="/list" element={<UserList users={users} setUsers={setUsers} isLoading={isLoading} onUserUpdated={handleUserUpdated} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
