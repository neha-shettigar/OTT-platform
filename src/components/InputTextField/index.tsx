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

/**
 * this component contains ustomizable input fields.
 * @param label of the input field
 * @param value of the field
 * @param placeholder for the field
 * @param className of the field
 * @param type of the input
 * @param error message to be displayed
 * @param onChangeValue handle function for the input field
 * @param onBlur
 * @returns a form field with a label and an input element
 */
export const InputTextField = ({
  label,
  error,
  value,
  placeholder,
  className,
  type,
  onChangeValue,
  onBlur,
}: InputFieldInterface) => {
  return (
    <div className="input-container">
      <section className="input-container__section">
        {/* label of the input field */}
        <label
          htmlFor="input-container__input"
          className="input-container__label"
        >
          {label}
        </label>
        {/* error message */}
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
