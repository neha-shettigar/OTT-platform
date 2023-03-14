import React from 'react';
import './styles.scss';

interface InputFieldInterface {
  label?: string;
  error?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  onBlur?: () => void;
  onChangeValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputTextField = ({
  label,

  error,
  value,
  disabled,
  placeholder,
  className,
  type,
  onChangeValue,
  onBlur,
}: InputFieldInterface) => {
  return (
    <div className="input-container">
      <section className="input-container__section">
        <label
          htmlFor="input-container__input"
          className="input-container__label"
        >
          {label}
        </label>
        {error != null ? <p>{error}</p> : null}
      </section>
      <form className="input-container__form">
        <input
          type={type}
          name="username"
          className={className}
          value={value}
          placeholder={placeholder}
          onChange={onChangeValue}
        />
      </form>
    </div>
  );
};
