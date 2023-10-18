import PropType from 'prop-types';

import styles from './UsersList.module.scss';
import { useSelector } from 'react-redux';
import User from '../User/User';

const UsersList = ({ title, subtitle }) => {
  const { users } = useSelector((state) => state.users);

  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles['users-list']}>
        {users ? (
          users.map((user) => <User user={user} key={user.id} />)
        ) : (
          <p className={styles.subtitle}>{subtitle}</p>
        )}
      </ul>
    </>
  );
};

export default UsersList;

UsersList.propTypes = {
  title: PropType.string.isRequired,
  subtitle: PropType.string.isRequired,
};
