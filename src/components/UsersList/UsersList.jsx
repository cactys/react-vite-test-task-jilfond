import PropType from 'prop-types';

import styles from './UsersList.module.scss';
import User from '../User/User';
import { useSelector } from 'react-redux';

const UsersList = ({ title, subtitle }) => {
  const { filteredUsers } = useSelector((state) => state.users);

  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles['users-list']}>
        {filteredUsers?.length ? (
          filteredUsers?.map((user) => <User user={user} key={user.id} />)
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
