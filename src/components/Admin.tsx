import { useSelector } from 'react-redux';
import "../styles/admincomponent.css"
import { useNavigate } from 'react-router-dom';

const AdminComponent = () => {
  const navigate = useNavigate();
  const handleRoleSwitch = () => {
    navigate("/")
    
  };
  const user = useSelector((state) => state?.user?.user);
  return (
    <div className="admin-container">
      <h2 className="admin-header">Admin Dashboard</h2>
      <p className="admin-message">Welcome, {user.username}! Here you can manage users and settings.</p>
      <button className="switch-button" onClick={handleRoleSwitch}>
        Logout {user.role === 'admin' ? 'Admin' : 'User'} Role
      </button>
    </div>
  );
};

export default AdminComponent;
