import PropType from 'prop-types';
import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';

const Layout = ({ title, subtitle }) => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.header__title}>{title}</h1>
        <p className={styles.header__description}>{subtitle}</p>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  title: PropType.string.isRequired,
  subtitle: PropType.string.isRequired,
};
