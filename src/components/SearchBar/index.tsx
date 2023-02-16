import React from 'react';
import { InputTextField } from '../InputTextField';
import { Button } from '../Button';
import './styles.scss';

interface SearchBarInterface {
  value?: string;
  icon?: string;
  placeholder?: string;
  label?: string;
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SearchBar = ({
  value,
  icon,
  placeholder,
  label,
  onChangeValue,
  onSubmit,
}: SearchBarInterface) => {
  return (
    <main className="searchbar-container">
      <section className="searchbar-container__input">
        <object className="searchbar-container__object" data={icon} />
        <InputTextField
          value={value}
          className="searchbar-container__input"
          placeholder={placeholder}
          onChangeValue={onChangeValue}
        />
      </section>
      <section className="searchbar-container__button-container">
        <Button
          label={label}
          className="searchbar-container__button"
          onClickButton={onSubmit}
        />
      </section>
    </main>
  );
};

export default SearchBar;
