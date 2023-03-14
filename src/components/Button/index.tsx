import React from 'react';
import './styles.scss';

// button interface
export interface ButtonInterface {
  label?: string;
  disabled?: boolean;
  className?: string;
  error?: string;
  children?: React.ReactNode;
  onClickButton: () => void;
}

/**
 * This is a React functional component that takes in an object of type ButtonInterface as its props.
 * The button element has the label text passed in as the label prop and a className passed in as the className prop.
 *  also has an onClick event handler that calls the onClickButton function passed in as a prop when the button is clicked.
 */
export const Button = ({
  label,
  disabled,
  className,
  error,
  onClickButton,
}: ButtonInterface) => {
  return (
    <div className="button-container">
      <button className={className} type="submit" onClick={onClickButton}>
        {label}
      </button>
      {error != null ? <p>{error}</p> : null}
    </div>
  );
};
