import React from 'react';
import './styles.scss';

export interface ButtonInterface {
  label?: string;
  disabled?: boolean;
  onClickButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ label, disabled, onClickButton }: ButtonInterface) => {
  return (
    <div className="button-container">
      <button
        className="button-container__button"
        type="submit"
        onClick={onClickButton}
      >
        {label}
      </button>
    </div>
  );
};
