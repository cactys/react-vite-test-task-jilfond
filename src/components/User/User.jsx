import { useDispatch } from 'react-redux';

import { dataPropType } from '../../utils/constants';

import photoDefault from '../../images/photo_default.png';
import { selectUser } from '../../services/slice/userSlice';
import styles from './User.module.scss';

const User = ({ user }) => {
  const dispatch = useDispatch();

  const handleSelectUser = () => {
    dispatch(selectUser(user));
  };

  return (
    <li className={styles.wrapper} onClick={handleSelectUser}>
      <img src={user.photo || photoDefault} alt='Photo' className={styles.photo} />
      <div className={styles.user}>
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
