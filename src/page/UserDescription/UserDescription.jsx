import PropType from 'prop-types';

import styles from './UserDescription.module.scss';

const UserDescription = ({ description }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default UserDescription;

UserDescription.propTypes = {
  description: PropType.string.isRequired,
};
