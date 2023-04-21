import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setValue } from '../../redux/reducers/mainReducer';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.main);

  const valueRef = useRef<string>(search);

  const [value, setStateValue] = useState(search);

  const { handleSubmit } = useForm({ mode: 'onSubmit' });

  useEffect(() => {
    valueRef.current = search;
  }, [search]);

  useEffect(() => {
    return () => {
      setStateValue(valueRef.current);
    };
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStateValue(event.target.value);
  };

  const onSubmit = () => {
    dispatch(setValue({ search: value }));
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
