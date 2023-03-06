/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';
import { InputTextField } from '../InputTextField';
import { Button } from '../Button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInSuccess, signInFail } from '../../states/auth';
import axios from 'axios';
import './styles.scss';

// Login component
const Login = () => {
  const [identifier, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const onClickSignUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/register');
  };
  const onClickSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://sea-turtle-app-ccc3d.ondigitalocean.app/api/auth/local',
      );
      console.log(response.data);

      const users = response.data;
      console.log(users);

      const user = users.find(
        (user: any) =>
          user.username === identifier && user.password === password,
      );
      if (user) {
        dispatch(signInSuccess(user));
        localStorage.setItem('currentUser', JSON.stringify(user));
        navigate('/home');
      } else {
        dispatch(signInFail('Invalid email or password'));
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error(error);
      dispatch(signInFail('Failed to sign in'));
      setError('Failed to sign in');
    }
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
            label="Email"
            value={identifier}
            className="login-container__signIn__input"
            onChangeValue={onChangeUsername}
            placeholder="Email"
          />
          <InputTextField
            label="Password"
            value={password}
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
          {error.length > 0 && (
            <div className="login-container__signIn__error">{error}</div>
          )}
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
