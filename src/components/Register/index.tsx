import React from 'react';
import './styles.scss';
import { InputTextField } from '../InputTextField';
import { Button } from '../Button';

// interface RegisterInterface {
//   label?: string;
//   fullName?: string;
//   email?: string;
//   password?: string;
//   confirmPassword?: string;
//   onChangeFullName: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onChangeConfirmPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onClickButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
// }

const Register = () => {
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
  const onClickRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <div className="register-container">
      <div className="register-container__header">
        <h1>Movie OTT</h1>
      </div>
      <div className="register-container__register">
        <h2 className="register-container__register__header">Regiter</h2>
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
