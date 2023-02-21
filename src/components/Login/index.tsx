import React from 'react';
import { InputTextField } from '../InputTextField';
import { Button } from '../Button';
import './styles.scss';

// interface LoginInterface {
//   email: string;
//   password: string;
//   onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onClickSignIn: (e: React.MouseEvent<HTMLButtonElement>) => void;
//   onClickSignUp: (e: React.MouseEvent<HTMLButtonElement>) => void;
// }

// Login component
const Login = () => {
  const initialState = {
    fullName: '',

    email: '',

    password: '',

    confirmPassword: '',
  };

  const [user, setUser] = React.useState(initialState);
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onClickSignUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
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
            className="login-container__signIn__input"
            onChangeValue={onChangeValue}
            placeholder="Email"
          />
          <InputTextField
            label="Password"
            className="login-container__signIn__input"
            onChangeValue={onChangeValue}
            placeholder="Password"
          />
          <Button
            label="Sign In"
            className="login-container__signIn__button"
            onClickButton={onClickSignUp}
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
