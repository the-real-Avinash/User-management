import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUserData } from '../reducers/userSlice';

const UserData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state:any) => state.user.user);
  const status = useSelector((state:any) => state.user.status);
  const error = useSelector((state:any) => state.user.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUserData());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (user.role) {
      if (user.role === 'admin') {
        navigate('/admin');
      } else if (user.role === 'user') {
        navigate('/user');
      }
    }
  }, [navigate, user.role]);

  return (
    <div>
      <h1>User Data</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <div>
          <p>Username: {user.username}</p>
          <p>Role: {user.role}</p>
        </div>
      )}
    </div>
  );
};

export default UserData;
