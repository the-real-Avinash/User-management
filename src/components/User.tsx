// src/components/UserComponent.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../reducers/userSlice'; // Make sure this path is correct
import "../styles/usercomponent.css";
import { useNavigate } from 'react-router-dom';

const UserComponent = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const handleRoleSwitch = () => {
    navigate("/") 
  };
  return (
    <div className="user-container">
      <h2 className="user-header">User Profile</h2>
      <p className="user-message">Welcome, {user.username}! Here you can view your profile and settings.</p>
      <button className="switch-button" onClick={handleRoleSwitch}>
        Logout {user.role === 'admin' ? 'Admin' : 'User'} Role
      </button>
    </div>
  );
};

export default UserComponent;
