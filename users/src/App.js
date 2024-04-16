import React, { useState, useEffect } from 'react';
import UsersList from './components/UsersList';
import AddUserForm from './components/AddUserForm';
import API_BASE_URL from './config';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch(`${API_BASE_URL}/users`)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  };

  const addUser = (user) => {
    fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(() => fetchUsers())
    .catch(error => console.error('Error posting user:', error));
  };

  const deleteUser = (id) => {
    fetch(`${API_BASE_URL}/users/${id}`, { method: 'DELETE' })
      .then(() => fetchUsers())
      .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <div>
      <AddUserForm onAddUser={addUser} />
      <UsersList users={users} onDeleteUser={deleteUser} />
    </div>
  );
}

export default App;
