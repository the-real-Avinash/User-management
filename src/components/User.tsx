
import React from 'react';
import { useSelector } from 'react-redux';
import "../styles/usercomponent.css";
import { useNavigate } from 'react-router-dom';

const UserComponent = () => {
  const navigate = useNavigate();
  const user = useSelector((state:any) => state.user.user);
  const handleRoleSwitch = () => {
    navigate("/") 
  };
  return (
    <React.Fragment>
    <div className="user-container">
      <h2 className="user-header">User Profile</h2>
      <p className="user-message">Welcome, {user.username}! Here you can view your profile and settings.</p>
      <button className="switch-button" onClick={handleRoleSwitch}>
        Logout {user.role === 'admin' ? 'Admin' : 'User'} Role
      </button>
    </div>
    </React.Fragment>
  );
};

export default UserComponent;
