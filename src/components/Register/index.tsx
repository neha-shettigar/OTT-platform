/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState } from 'react';
import './styles.scss';
import { InputTextField } from '../InputTextField';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';

import { useDispatch } from 'react-redux';
import { registerSuccess, registerFail } from '../../states/auth';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const onChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setconfirmPassword(e.target.value);

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      const users = JSON.parse(localStorage.getItem('users') ?? '[]');
      const existingUser = users.find((user: any) => user.email === email);
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (existingUser) {
        dispatch(registerFail('Email already exists'));
      } else {
        const newUser = { username, email, password };
        dispatch(registerSuccess(newUser));
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        localStorage.setItem('users', JSON.stringify([...users, newUser]));
        navigate('/');
      }
    }
  };

  return (
    <div className="register-container">
      <div className="register-container__header">
        <h1>Movie OTT</h1>
      </div>
      <div className="register-container__register">
        <h2 className="register-container__register__header">Register</h2>
        <InputTextField
          label="Full Name"
          placeholder="Full Name"
          // value={user.username}
          className="register-container__register__input"
          onChangeValue={onChangeUsername}
        />
        <InputTextField
          label="Email"
          placeholder="Email"
          // value={user.email}
          className="register-container__register__input"
          onChangeValue={onChangeEmail}
        />
        <InputTextField
          label="Password"
          placeholder="Password"
          // value={user.password}
          className="register-container__register__input"
          onChangeValue={onChangePassword}
          type="password"
        />
        <InputTextField
          label="Confirm Password"
          placeholder="Confirm Password"
          // value={user.confirmPassword}
          className="register-container__register__input"
          onChangeValue={onChangeConfirmPassword}
          type="password"
        />
        {errorMessage.length > 0 && <p>{errorMessage}</p>}
        <Button
          label="Register"
          className="register-container__register__button"
          onClickButton={handleRegister}
        />
      </div>
    </div>
  );
};

export default Register;
