/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState } from 'react';
// import axios from 'axios';
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
    if (username.length < 3) {
      setUsernameError('Name at least 4 characters long');
    } else {
      setUsernameError('');
    }
  };
  const validateEmail = () => {
    // trim() Removes the leading and trailing white space and line terminator characters from a string.
    if (email.trim() === '') {
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
    if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleRegister = () => {
    validateUsername();
    validatePassword();
    validateConfirmPassword();

    fetch(
      'https://sea-turtle-app-ccc3d.ondigitalocean.app/api/auth/local/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      },
    )
      .then(async (response) => {
        await response.json();
        console.log(response);
        if (response.status === 200) {
          navigate('/');
          alert('Register Successful');
          localStorage.setItem('users', JSON.stringify([...users, response]));
        } else {
          setEmailError('Email is invalid or already exists');
        }
      })

      .then((newUser) => {
        dispatch(registerSuccess(newUser));

        console.log(newUser);

        // if (newUser.error.status !== 400) {
        //   navigate('/');
        //   alert('Register Successful');
        // }
      })
      .catch((error) => {
        console.log(error);

        setErrorMessage('Failed to register');
        dispatch(registerFail(setErrorMessage));
        setEmailError(error);
      });
  };

  return (
    <div className="register-container">
      <section className="register-container__section">
        <div className="register-container__header"></div>
        <h1>Movie OTT</h1>
      </section>
      <div className="register-container__register">
        <div className="register-container__register__header">Register</div>

        <InputTextField
          label="Full Name"
          placeholder="Full Name"
          value={username}
          onChangeValue={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(e.target.value);
            validateUsername();
          }}
          className="register-container__register__input"
          onBlur={() => validateUsername()}
          error={usernameError}
        />

        <InputTextField
          label="Email"
          placeholder="Email"
          type="email"
          value={email}
          onChangeValue={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
            validateEmail();
          }}
          className="register-container__register__input"
          // onBlur={validateEmail}
          error={emailError}
        />

        <InputTextField
          label="Password"
          placeholder="Password"
          type="password"
          value={password}
          onChangeValue={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
            validatePassword();
          }}
          className="register-container__register__input"
          onBlur={validatePassword}
          error={passwordError}
        />

        <InputTextField
          label="Confirm Password"
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          onChangeValue={(e: React.ChangeEvent<HTMLInputElement>) => {
            setConfirmPassword(e.target.value);
          }}
          className="register-container__register__input"
          onBlur={validateConfirmPassword}
          error={confirmPasswordError}
        />

        <Button
          label="Register"
          className="register-container__register__button"
          // disabled={email ==='' && username==='' && password==='' && confirmPassword === ''}
          disabled={
            email === '' ||
            username === '' ||
            password === '' ||
            confirmPassword === ''
          }
          onClickButton={handleRegister}
        />
      </div>
    </div>
  );
};

export default Register;
