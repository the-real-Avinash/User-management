// src/components/LoginComponent.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../reducers/userSlice';
import "../styles/logincomponent.css"

const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('user');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        dispatch(setUser({ username, role }));

        // Redirect based on role
        if (role === 'admin') {
            navigate('/admin');
        } else {
            navigate('/user');
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h1 className="login-title">Login</h1>
                <div className="form-group">
                    <label htmlFor="username" className="label">Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="role" className="label">Role</label>
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="select"
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button
                    onClick={handleLogin}
                    className="button"
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default LoginComponent;
