import React from 'react';
import './styles.scss';

export interface ButtonInterface {
  label?: string;
  disabled?: boolean;
  className?: string;
  error?: string;
  children?: React.ReactNode;
  onClickButton: () => void;
}

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
