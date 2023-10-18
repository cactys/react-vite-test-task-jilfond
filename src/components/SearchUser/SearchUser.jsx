import PropType from 'prop-types';

import styles from './SearchUser.module.scss';
import useValidationForm from '../../hooks/useValidationForm';

const SearchUser = ({ title, placeholder, type }) => {
  const { values, handleChange, isValid, setIsValid } = useValidationForm();

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  console.log(values.search);

  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          placeholder={placeholder}
          name="search"
          type={type}
          value={values.search || ''}
          onChange={handleChange}
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
