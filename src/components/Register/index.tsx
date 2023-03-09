/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState } from 'react';
import axios from 'axios';
// import bcrypt from 'bcryptjs'; // import bcryptjs library
import { InputTextField } from '../InputTextField';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { useDispatch } from 'react-redux';
import { registerSuccess, registerFail } from '../../states/auth';
import './styles.scss';

// export const hashPasswordFunction = (password: string): any =>
//   bcrypt.hashSync(password, 10);
const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // const [,setHashPassword]=useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem('users') ?? '[]');

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const onChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setconfirmPassword(e.target.value);

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      // hash the password before sending it to the server
      // const hashPassword=hashPasswordFunction(password);
      // setHashPassword(hashPassword);
      axios
        .post(
          'https://sea-turtle-app-ccc3d.ondigitalocean.app/api/auth/local/register',
          { username, email, password },
        )
        .then((response) => {
          const newUser = response.data;
          dispatch(registerSuccess(newUser));
          localStorage.setItem('currentUser', JSON.stringify(newUser));
          localStorage.setItem('users', JSON.stringify([...users, newUser]));
          navigate('/');
        })
        .catch((error) => {
          setErrorMessage(error.message);
          console.log(error.request.response.data);
          console.log(error.message);

          dispatch(registerFail(setErrorMessage));
        });
    }
  };

  return (
    <div className="register-container">
      <div className="register-container__header">
        <h1>Movie OTT</h1>
      </div>
      <div className="register-container__register">
        <h2 className="register-container__register__header">Register</h2>
        <InputTextField
          label="Full Name"
          placeholder="Full Name"
          className="register-container__register__input"
          onChangeValue={onChangeUsername}
        />
        <InputTextField
          label="Email"
          placeholder="Email"
          className="register-container__register__input"
          onChangeValue={onChangeEmail}
        />
        <InputTextField
          label="Password"
          placeholder="Password"
          className="register-container__register__input"
          onChangeValue={onChangePassword}
          type="password"
        />
        <InputTextField
          label="Confirm Password"
          placeholder="Confirm Password"
          className="register-container__register__input"
          onChangeValue={onChangeConfirmPassword}
          type="password"
        />
        {errorMessage.length > 0 && <p>{errorMessage}</p>}
        <Button
          label="Register"
          className="register-container__register__button"
          onClickButton={handleRegister}
        />
      </div>
    </div>
  );
};

export default Register;
