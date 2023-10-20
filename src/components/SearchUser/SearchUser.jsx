import PropType from 'prop-types';

import styles from './SearchUser.module.scss';
import { useDispatch, useStore } from 'react-redux';
import { searchQuery } from '../../services/slice/userSlice';

const SearchUser = ({ title, placeholder, type }) => {
  const { search } = useStore((state) => state.users);

  const dispatch = useDispatch();

  const handleSearch = (evt) => {
    const { value } = evt.target;
    dispatch(searchQuery(value));
  };

  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <form onSubmit={handleSearch}>
        <input
          className={styles.input}
          placeholder={placeholder}
          name="search"
          type={type}
          value={search}
          onChange={handleSearch}
          required
        />
      </form>
    </>
  );
};

export default SearchUser;

SearchUser.propTypes = {
  title: PropType.string.isRequired,
  placeholder: PropType.string.isRequired,
  type: PropType.string.isRequired,
};
