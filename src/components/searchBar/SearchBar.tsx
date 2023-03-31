import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import './search.css';

const SearchBar = () => {
  const [value, setValue] = useState(localStorage.getItem('search-key987') || '');
  const valueRef = useRef<string>(value);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  useEffect(() => {
    const savedValue = localStorage.getItem('search-key987');
    savedValue && setValue(savedValue);
    return () => {
      localStorage.setItem('search-key987', valueRef.current || '');
    };
  }, []);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <div className="search-wrapper">
      <input
        type="search"
        className="search-bar"
        value={value}
        onChange={(event) => handleChange(event)}
      />
    </div>
  );
};

export default SearchBar;
