import PropTypes from 'prop-types';
import { Notify } from 'notiflix';
import { Form } from './SearchForm.styled';
import { useSearchParams } from 'react-router-dom';

const SearchForm = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = event => {
    event.preventDefault();
    const { value } = event.currentTarget.elements.searchValue;

    if (value.trim() === '') {
      return Notify.warning('Enter value!');
    }

    setSearchParams({ query: value });
    const query = searchParams.get('query');

    onSubmit(query);
    console.log(value);

    event.currentTarget.elements.searchValue.value = '';
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchValue"
        autoFocus
        placeholder="Search movies"
      />
      <button type="submit">Search</button>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
