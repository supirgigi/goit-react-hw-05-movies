import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import styles from './search-form.module.css';

export const SearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    query: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { query } = state;

    if (query.trim() === '') {
      toast.error('Enter correct movie title');
      setState({ query: '' });
      return;
    }

    onSubmit(query);
    setState({ query: '' });
  };

  const { query } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        name="query"
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="search movies"
        required
        className={styles.input}
      />
      <button type="submit" className="btn">
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
