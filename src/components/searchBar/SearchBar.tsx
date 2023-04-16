import React, { ChangeEvent, useEffect, useRef } from 'react';
import './search.css';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setValue } from '../../redux/reducers';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.main);

  const valueRef = useRef<string>(search);

  const { handleSubmit } = useForm({ mode: 'onSubmit' });

  useEffect(() => {
    valueRef.current = search;
  }, [search]);

  useEffect(() => {
    return () => {
      dispatch(setValue({ search: valueRef.current }));
    };
  }, [dispatch]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setValue({ search: event.target.value }));
  };

  const onSubmit = () => {
    dispatch(setValue({ search: valueRef.current }));
  };

  return (
    <div className="search-wrapper">
      <form className="form-component_search" onSubmit={handleSubmit(onSubmit)}>
        <input type="search" className="search-bar" value={search} onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchBar;
