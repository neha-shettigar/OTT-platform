/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState } from 'react';
import axios from 'axios';
import { InputTextField } from '../InputTextField';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { useDispatch } from 'react-redux';
import { registerSuccess, registerFail } from '../../states/auth';
import './styles.scss';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem('users') ?? '[]');

  const validateUsername = () => {
    if (username.trim() === '') {
      setUsernameError('Please enter a username');
    } else if (username.length < 4) {
      setUsernameError('Username must be at least 4 characters long');
    } else {
      setUsernameError('');
    }
  };

  const validateEmail = () => {
    if (email.trim() === '') {
      setEmailError('Please enter an email address');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (password.trim() === '') {
      setPasswordError('Please enter a password');
    } else if (password.length < 8) {
      setPasswordError('Password at least 8 characters long');
    } else {
      setPasswordError('');
    }
  };

  const validateConfirmPassword = () => {
    if (confirmPassword.trim() === '') {
      setConfirmPasswordError('Please confirm your password');
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleRegister = () => {
    validateUsername();
    validateEmail();
    validatePassword();
    validateConfirmPassword();

    if (
      usernameError === '' &&
      emailError === '' &&
      passwordError === '' &&
      confirmPasswordError === ''
    ) {
      axios
        .post(
          'https://sea-turtle-app-ccc3d.ondigitalocean.app/api/auth/local/register',
          { username, email, password },
        )
        .then((response) => {
          const newUser = response.data;
          dispatch(registerSuccess(newUser));
          localStorage.setItem('currentUser', JSON.stringify(newUser));
          localStorage.setItem('users', JSON.stringify([...users, newUser]));
          navigate('/');
          alert('Register Successful');
        })
        .catch(() => {
          setErrorMessage('Email already exists');
          dispatch(registerFail(setErrorMessage));
        });
    }
    // else {
    //   alert('Please fix the errors in the form');
    // }
  };

  return (
    <main className="register-container">
      <section className="register-container__section">
        <div className="register-container__header"></div>
        <h1>Movie OTT</h1>
      </section>
      <section className="register-container__register">
        <header className="register-container__register__header">
          Register
        </header>

        <InputTextField
          label="Full Name"
          placeholder="Full Name"
          value={username}
          onChangeValue={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
          className="register-container__register__input"
          onBlur={validateUsername}
          error={usernameError}
        />

        <InputTextField
          label="Email"
          placeholder="Email"
          type="email"
          value={email}
          onChangeValue={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          className="register-container__register__input"
          onBlur={validateEmail}
          error={emailError}
        />

        <InputTextField
          label="Password"
          placeholder="Password"
          type="password"
          value={password}
          onChangeValue={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          className="register-container__register__input"
          onBlur={validatePassword}
          error={passwordError}
        />

        <InputTextField
          label="Confirm Password"
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          onChangeValue={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value)
          }
          className="register-container__register__input"
          onBlur={validateConfirmPassword}
          error={confirmPasswordError}
        />

        <Button
          label="Register"
          className="register-container__register__button"
          onClickButton={handleRegister}
        />
      </section>
    </main>
  );
};

export default Register;
