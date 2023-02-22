import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { login, AuthAction } from '../../states/actions';
import { RootState } from '../../states/store';
// import components
import { InputTextField } from '../InputTextField';
import { Button } from '../Button';

import './styles.scss';

interface LoginInterface {
  onSuccess: () => void;
}
// Login component contains input components for user inputs and a button component for submitting
const Login = ({ onSuccess }: LoginInterface) => {
  //  const dispatch:Dispatch<AuthAction> = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onClickSignUp = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    //  dispatch(login(email, password));
  };

  if (auth.token != null) {
    onSuccess();
  }

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    // main container
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
