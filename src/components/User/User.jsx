import { useDispatch, useSelector } from 'react-redux';

import { dataPropType } from '../../utils/constants';

import photoDefault from '../../images/photo_default.png';
import { fetchUserById } from '../../services/slice/userSlice';
import styles from './User.module.scss';

const User = ({ user }) => {
  const { select } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleSelectUser = () => {
    dispatch(fetchUserById(user));
  };

  return (
    <li
      className={`${styles.wrapper} ${
        select?.id === user.id && styles.wrapper_active
      }`}
      onClick={handleSelectUser}
    >
      <img
        src={user.photo || photoDefault}
        alt="Photo"
        className={styles.photo}
      />
      <div
        className={`${styles.user} ${
          select?.id === user.id && styles.user_active
        }`}
      >
        <p className={styles.user__username}>{user.username}</p>
        <p className={styles.user__email}>{user.email}</p>
      </div>
    </li>
  );
};

export default User;

User.propTypes = {
  user: dataPropType.isRequired,
};
