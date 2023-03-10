import React from 'react';
import './styles.scss';

export interface ButtonInterface {
  label?: string;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClickButton: () => void;
}

export const Button = ({
  label,
  disabled,
  className,
  onClickButton,
}: ButtonInterface) => {
  return (
    <div className="button-container">
      <button className={className} type="submit" onClick={onClickButton}>
        {label}
      </button>
    </div>
  );
};
