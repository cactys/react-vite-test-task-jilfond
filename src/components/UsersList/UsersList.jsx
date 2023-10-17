import PropType from 'prop-types';

import styles from './UsersList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '../../services/slice/userSlice';
import User from '../User/User';

const UsersList = ({ title, subtitle }) => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <ul>
        {users && users?.map((user) => {
          <User user={user} key={user.id} />;
        })}
      </ul>
      <p className={styles.subtitle}>{subtitle}</p>
    </>
  );
};

export default UsersList;

UsersList.propTypes = {
  title: PropType.string.isRequired,
  subtitle: PropType.string.isRequired,
};
