import PropType from 'prop-types';

import styles from './Container.module.scss';

const Container = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};

export default Container;

Container.propTypes = {
  children: PropType.element.isRequired,
};
