import React from 'react';
import './styles.scss';
import { InputTextField } from '../InputTextField';
import { Button } from '../Button';

interface RegisterInterface {
  label: string;
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  onChangeFullName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeConfirmPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Register = ({
  label,
  fullName,
  email,
  password,
  confirmPassword,
  onChangeFullName,
  onChangeEmail,
  onChangePassword,
  onChangeConfirmPassword,
  onClickButton,
}: RegisterInterface) => {
  return (
    <div className="register-container">
      <div className="register-container__header">
        <h1>Movie OTT</h1>
      </div>
      <div className="register-container__register">
        <h2 className="register-container__register__header">{label}</h2>
        <InputTextField
          label="Full Name"
          placeholder="Full Name"
          value={fullName}
          onChangeValue={onChangeFullName}
        />
        <InputTextField
          label="Email"
          placeholder="Email"
          value={email}
          onChangeValue={onChangeEmail}
        />
        <InputTextField
          label="Password"
          placeholder="Password"
          value={password}
          onChangeValue={onChangePassword}
        />
        <InputTextField
          label="Confirm Password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeValue={onChangeConfirmPassword}
        />
        <Button label="Register" onClickButton={onClickButton} />
      </div>
    </div>
  );
};

export default Register;
