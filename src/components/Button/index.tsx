import React from 'react';
import './styles.scss';

export interface ButtonInterface {
  label?: string;
  disabled?: boolean;
  className?: string;
  onClickButton?: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
}

export const Button = ({
  label,
  disabled,
  className,
  onClickButton,
}: ButtonInterface) => {
  return (
    <div className="button-container">
      <button className={className} type="submit">
        {label}
      </button>
    </div>
  );
};
