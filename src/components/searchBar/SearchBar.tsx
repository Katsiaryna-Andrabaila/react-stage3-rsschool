import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import './search.css';
import { SearchCard } from 'types/types';
import { useForm } from 'react-hook-form';

const SearchBar = (props: { searchCards: (cards: SearchCard[]) => void }) => {
  const [value, setValue] = useState(localStorage.getItem('search-key987') || '');
  const valueRef = useRef<string>(value);

  const { handleSubmit } = useForm({ mode: 'onSubmit' });

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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onSubmit = () => {
    console.log(0);
    //props.searchCards();
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
