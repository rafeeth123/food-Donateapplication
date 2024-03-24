import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admindash.css'

function Admindash() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/auth/users') // Replace with your backend URL
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleDeleteUser = (userId) => {
    axios.delete(`http://localhost:8080/auth/users/${userId}`) // Replace with your backend URL
      .then(() => {
        // Handle successful deletion, e.g., refresh the user list
        // You can also add a confirmation message here
        setUsers(users.filter(user => user.userRegId !== userId));
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  const totalUsers = users.length; // Count the total number of users

  return (
    <div className="admin-panel"> {/* Apply the admin-panel class */}
    <div className='user'>
      <h1>USER LIST</h1>
      </div>
      <p>Total Users: {totalUsers}</p> {/* Display the total number of users */}
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>User Reg Id</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userRegId}>
              <td>{user.username}</td>
              <td>{user.emailid}</td>
              <td>{user.mobileno}</td>
              <td>{user.userRegId}</td>
              <td>
                <button className="delete-button" onClick={() => handleDeleteUser(user.userRegId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admindash;
