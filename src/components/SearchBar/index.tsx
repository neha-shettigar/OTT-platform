import React from 'react';
import { InputTextField } from '../InputTextField';
import './styles.scss';

interface SearchBarInterface {
  value?: string;
  icon?: string;
  placeholder?: string;
  label?: string;
  onChangeValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
      <object className="searchbar-container__object" data={icon} />
      <InputTextField
        value={value}
        className="searchbar-container__input"
        placeholder={placeholder}
        // onChangeValue={onChangeValue}
      />
      <section className="searchbar-container__button-container">
        <button className="searchbar-container__button" type="submit">
          Search
        </button>
      </section>
    </main>
  );
};

export default SearchBar;
