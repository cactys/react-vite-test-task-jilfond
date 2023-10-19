import PropType from 'prop-types';

import styles from './SearchUser.module.scss';

const SearchUser = ({ title, placeholder, type, search, setSearch }) => {
  const handleSearch = (evt) => {
    const { value } = evt.target;
    setSearch(value);
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
  search: PropType.string.isRequired,
  setSearch: PropType.func.isRequired,
};
