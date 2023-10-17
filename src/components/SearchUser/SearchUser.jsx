import PropType from 'prop-types';

import styles from './SearchUser.module.scss';

const SearchUser = ({ title, placeholder }) => {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <input className={styles.input} placeholder={placeholder} />
    </>
  );
};

export default SearchUser;

SearchUser.propTypes = {
  title: PropType.string.isRequired,
  placeholder: PropType.string.isRequired,
};
