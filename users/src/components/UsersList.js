import React from 'react';

function UsersList({ users, onDeleteUser }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email}
          <button onClick={() => onDeleteUser(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default UsersList;
