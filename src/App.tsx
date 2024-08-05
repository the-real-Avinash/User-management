import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserData from './components/UserData'
import AdminComponent from './components/Admin';
import UserComponent from './components/User';
import LoginComponent from './components/Login';


  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/admin" element={<AdminComponent />} />
          <Route path="/user" element={<UserComponent />} />
          <Route path="/userdata" element={<UserData />} />
        </Routes>
      </Router>
    )
  }

export default App
