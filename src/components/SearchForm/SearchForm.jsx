import { Notify } from 'notiflix';
import { Form } from './SearchForm.styled';
import { useSearchParams } from 'react-router-dom';

const SearchForm = () => {
  const searchParams = useSearchParams();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const { value } = form.elements.searchValue;

    if (value.trim() === '') {
      return Notify.warning('Enter value!');
    }
    searchParams[1]({ query: value });

    form.reset();
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

export default SearchForm;
