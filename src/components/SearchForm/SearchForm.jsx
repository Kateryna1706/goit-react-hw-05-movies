// import PropTypes from 'prop-types';
// import { IconButton } from '../IconButton/IconButton';
// import { ReactComponent as Search } from '../Icons/Icons.svg';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';

import { useSearchParams } from "react-router-dom";

export const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  useEffect(() => {}, []);

  const handleChange = event => {
    const { value } = event.currentTarget;
    setValue(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (value.trim() === '') {
      return Notify.warning('Enter value!');
    }

    setSearchParams({ query: value });

    // onSubmit(value);

    // reset();
  };

  //   const reset = () => {
  //     setValue('');
  //   };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        autoFocus
        placeholder="Search movies"
        onChange={handleChange}
      />
    </form>
  );
};

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
