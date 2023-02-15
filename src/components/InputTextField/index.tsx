import React from 'react';
import './styles.scss';

interface InputFieldInterface {
  label?: string;
  error?: string;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputTextField = ({
  label,
  error,
  value,
  disabled,
  placeholder,
  onChangeValue,
}: InputFieldInterface) => {
  return (
    <div className="input-container">
      <label
        htmlFor="input-container__input"
        className="input-container__label"
      >
        {label}
      </label>
      <form className="input-container__form">
        <input
          type="text"
          name="username"
          className="input-container__input"
          value={value}
          placeholder={placeholder}
          onChange={onChangeValue}
        />
      </form>
    </div>
  );
};
