import { Link } from 'react-router-dom';
import styles from './Error.module.scss';

const Error = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header} />
      <main className={styles.main}>
        <h1 className={styles.title}>Страница не найдена!</h1>
        <Link className={styles.link}>Вернуться обратно</Link>
      </main>
    </div>
  );
};

export default Error;
