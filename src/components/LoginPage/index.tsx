import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../Login';

const LoginPage: React.FC = () => {
  const history = useNavigate();

  const handleLoginSuccess = () => {
    history('/');
  };

  return (
    <div>
      <h1>Login</h1>
      <Login onSuccess={handleLoginSuccess} />
    </div>
  );
};

export default LoginPage;
