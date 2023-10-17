import styles from './Home.module.scss';

import Container from '../../components/Container/Container';
import SearchUser from '../../components/SearchUser/SearchUser';
import UsersList from '../../components/UsersList/UsersList';
import UserDescription from '../UserDescription/UserDescription';

const Home = () => {
  return (
    <Container>
      <>
        <div className={styles.wrapper}>
          <SearchUser
            title="Поиск сотрудников"
            placeholder="Введите id или имя"
            type="text"
          />
          <UsersList title="Результаты" subtitle="начните поиск" />
        </div>
        <UserDescription description="Выберите сотрудника, чтобы посмотреть его профиль" />
      </>
    </Container>
  );
};

export default Home;
