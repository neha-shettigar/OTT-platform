import React, { useState } from 'react';
import { InputTextField } from '../InputTextField';
import { Button } from '../Button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInSuccess, signInFail } from '../../states/auth';
// import { hashPasswordFunction } from '../Register';
// import bcrypt from 'bcryptjs';

import './styles.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const onClickSignUp = () => navigate('/register');
  // const hashPassword = hashPasswordFunction(password);
  const data = {
    username,
    password,
  };

  const onClickSignIn = () => {
    setError('');

    fetch('https://sea-turtle-app-ccc3d.ondigitalocean.app/api/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: data.username,
        password: data.password,
      }),
    })
      .then(async (response) => {
        if (response.ok) {
          // const user = await response.json();
          // const storedPassword = user.password;
          // const validPassword = await bcrypt.compare(
          //   data.password,
          //   storedPassword,
          // );

          // if (validPassword) {
          dispatch(signInSuccess(data));
          localStorage.setItem('userdata', JSON.stringify(data));
          navigate('home');
          console.log('User signed in successfully');
          // }
        } else {
          dispatch(signInFail('Invalid email or password'));
          setError('Invalid credentials');
        }
      })
      .catch((error) => {
        dispatch(signInFail('Failed to sign in'));
        console.log('Error signing in: ', error);
      });
  };

  return (
    <div className="login-container">
      {/* component header */}
      <h1>Movie OTT </h1>
      <main className="login-container__main">
        {/* signIn container */}
        <aside className="login-container__signIn">
          <h2 className="login-container__signIn__header">
            Sign <span>In</span>
          </h2>
          <InputTextField
            label="Username"
            value={username}
            className="login-container__signIn__input"
            onChangeValue={onChangeUsername}
            placeholder="Username"
          />
          <InputTextField
            label="Password"
            value={password}
            type="password"
            className="login-container__signIn__input"
            onChangeValue={onChangePassword}
            placeholder="Password"
          />
          <Button
            label="Sign In"
            className="login-container__signIn__button"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClickButton={onClickSignIn}
          />

          <div className="login-container__signIn__error">{error}</div>
        </aside>

        {/* signUp container */}
        <aside className="login-container__signUp">
          <div className="login-container__signUp__text">
            <h2>
              <span>Welcome to</span> Movie OTT
            </h2>
            <p>
              <span>New here?</span> Create an account here.
            </p>
          </div>
          <Button
            label="Sign Up"
            className="login-container__signUp__button"
            onClickButton={onClickSignUp}
          />
        </aside>
      </main>
    </div>
  );
};

export default Login;
