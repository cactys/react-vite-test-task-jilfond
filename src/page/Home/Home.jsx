import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchUsers } from '../../services/slice/userSlice';
import Container from '../../components/Container/Container';
import SearchUser from '../../components/SearchUser/SearchUser';
import UsersList from '../../components/UsersList/UsersList';
import UserDescription from '../../components/UserDescription/UserDescription';
import styles from './Home.module.scss';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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
