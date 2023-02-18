import React from 'react';
import { InputTextField } from '../InputTextField';
import { Button } from '../Button';
import './styles.scss';

interface LoginInterface {
  email: string;
  password: string;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickSignIn: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickSignUp: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// Login component
const Login = ({
  email,
  password,
  onChangeEmail,
  onChangePassword,
  onClickSignIn,
  onClickSignUp,
}: LoginInterface) => {
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
            value={email}
            className="login-container__signIn__input"
            onChangeValue={onChangeEmail}
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
            onClickButton={onClickSignIn}
          />
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
