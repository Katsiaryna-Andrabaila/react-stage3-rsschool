import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import './search.css';
import { FoundItem } from '../../types/types';
import { useForm } from 'react-hook-form';
import { searchItems } from '../../api/searchItems';

const SearchBar = (props: { searchCards: (cards: FoundItem[] | null) => void }) => {
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

  const onSubmit = async () => {
    setValue(valueRef.current);
    const cards = await searchItems(valueRef.current);

    console.log(cards);
    cards.length ? props.searchCards(cards) : props.searchCards(null);
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
