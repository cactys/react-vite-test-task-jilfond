import { useSelector } from 'react-redux';
import PropType from 'prop-types';

import { userDescription } from '../../utils/constants';
import photoDefault from '../../images/photo_default.png';
import styles from './UserDescription.module.scss';

const UserDescription = ({ description }) => {
  const { select } = useSelector((state) => state.users);

  return (
    <div className={styles.wrapper}>
      {select ? (
        <div className={styles.container}>
          <img
            src={select.image ? select.image : photoDefault}
            alt="Photo"
            className={styles.photo}
          />
          <div className={styles.user}>
            <h2 className={styles.user__text}>{select.name}</h2>
            <p className={styles.user__text}>
              email:{' '}
              <span className={styles.user__text_regular}>{select.email}</span>
            </p>
            <p className={styles.user__text}>
              phone:{' '}
              <span className={styles.user__text_regular}>{select.phone}</span>
            </p>
            <div className={styles['user__description-container']}>
              <p className={styles.user__text}>О себе: </p>
              <p className={styles.user__text_regular}>{userDescription}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className={styles.description}>{description}</p>
      )}
    </div>
  );
};

export default UserDescription;

UserDescription.propTypes = {
  description: PropType.string.isRequired,
};
