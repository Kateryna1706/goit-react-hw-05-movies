import PropTypes from 'prop-types';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

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
    const query = searchParams.get('query');
    console.log(searchParams);

    onSubmit(query);

    reset();
  };

  const reset = () => {
    setValue('');
  };

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

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
