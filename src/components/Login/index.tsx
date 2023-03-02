import React from 'react';
// import { Dispatch } from 'redux';
// import { useDispatch } from 'react-redux';
// import { login } from '../../states/actions';
// import { AuthAction } from '../../states/types';
import { InputTextField } from '../InputTextField';
import { Button } from '../Button';
import './styles.scss';

// interface LoginProps {}

const Login = () => {
  // const dispatch:Dispatch<AuthAction> = useDispatch();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // dispatch(login(email, password));
  };

  return (
    <div className="login-container">
      <h1>Movie OTT </h1>
      <main className="login-container__main">
        <aside className="login-container__signIn">
          <h2 className="login-container__signIn__header">
            Sign <span>In</span>
          </h2>
          <InputTextField
            label="Email"
            className="login-container__signIn__input"
            value={email}
            onChangeValue={onChangeEmail}
            placeholder="Email"
          />
          <InputTextField
            label="Password"
            className="login-container__signIn__input"
            value={password}
            onChangeValue={onChangePassword}
            placeholder="Password"
          />
          <Button
            label="Sign In"
            className="login-container__signIn__button"
            onClickButton={handleSignIn}
          />
        </aside>
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
            onClickButton={() => console.log('Sign up button clicked')}
          />
        </aside>
      </main>
    </div>
  );
};

export default Login;
