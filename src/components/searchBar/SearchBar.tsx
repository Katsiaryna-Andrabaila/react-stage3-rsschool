import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import './search.css';
import { useForm } from 'react-hook-form';

const SearchBar = (props: { searchCards: (value: string) => void }) => {
  const [value, setValue] = useState(localStorage.getItem('search-key987') || '');
  const valueRef = useRef<string>(value);

  const { handleSubmit } = useForm({ mode: 'onSubmit' });

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  useEffect(() => {
    return () => {
      localStorage.setItem('search-key987', valueRef.current || '');
    };
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onSubmit = () => {
    setValue(valueRef.current);
    props.searchCards(value);
  };

  return (
    <div className="search-wrapper">
      <form className="form-component_search" onSubmit={handleSubmit(onSubmit)}>
        <input type="search" className="search-bar" value={value} onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchBar;
