import React from 'react';
// import components
import { InputTextField } from '../InputTextField';
import { Button } from '../Button';

import './styles.scss';

// this component contains input field and button components
const Register = () => {
  // initial state
  const initialState = {
    fullName: '',

    email: '',

    password: '',

    confirmPassword: '',
  };

  const [user, setUser] = React.useState(initialState);

  // handle function for value change
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  // handle function for button
  const onClickRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    // main container
    <div className="register-container">
      {/* component header */}
      <div className="register-container__header">
        <h1>Movie OTT</h1>
      </div>
      {/* container for header and input and button components */}
      <div className="register-container__register">
        <h2 className="register-container__register__header">Register</h2>
        {/* input field for taking user input */}
        <InputTextField
          label="Full Name"
          placeholder="Full Name"
          value={initialState.fullName}
          className="register-container__register__input"
          onChangeValue={onChangeValue}
        />
        <InputTextField
          label="Email"
          placeholder="Email"
          value={initialState.email}
          className="register-container__register__input"
          onChangeValue={onChangeValue}
        />
        <InputTextField
          label="Password"
          placeholder="Password"
          value={initialState.password}
          className="register-container__register__input"
          onChangeValue={onChangeValue}
        />
        <InputTextField
          label="Confirm Password"
          placeholder="Confirm Password"
          value={initialState.confirmPassword}
          className="register-container__register__input"
          onChangeValue={onChangeValue}
        />
        {/* button for submitting the data */}
        <Button
          label="Register"
          className="register-container__register__button"
          onClickButton={onClickRegister}
        />
      </div>
    </div>
  );
};

export default Register;
