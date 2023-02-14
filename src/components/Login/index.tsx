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
      <h1>Movie OTT </h1>
      <main className="login-container__main">
        <aside className="login-container__signIn">
          <h2 className="login-container__header">Sign In</h2>
          <InputTextField
            label="email"
            value={email}
            onChangeValue={onChangeEmail}
          />
          <InputTextField
            label="Password"
            value={password}
            onChangeValue={onChangePassword}
          />
          <Button onClickButton={onClickSignIn} label="Sign In" />
        </aside>
        <aside className="login-container__signUp">
          <h2>Welcome to Movie OTT</h2>
          <img src="../assets/login-image.svg" />
          <Button onClickButton={onClickSignUp} label="Sign Up" />
        </aside>
      </main>
    </div>
  );
};

export default Login;
