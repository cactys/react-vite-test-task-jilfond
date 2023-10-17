import PropType from 'prop-types';

import styles from './UsersList.module.scss';

const UsersList = ({ title, subtitle }) => {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
    </>
  );
};

export default UsersList;

UsersList.propTypes = {
  title: PropType.string.isRequired,
  subtitle: PropType.string.isRequired,
};
