import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchSearchUser,
  fetchUsers,
  searchUsers,
} from '../../services/slice/userSlice';
import Container from '../../components/Container/Container';
import SearchUser from '../../components/SearchUser/SearchUser';
import UsersList from '../../components/UsersList/UsersList';
import UserDescription from '../../components/UserDescription/UserDescription';
import styles from './Home.module.scss';

const Home = () => {
  const { search, users, arrSearch } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (search) dispatch(searchUsers({ searchQuery: search, users: users }));
  }, [dispatch, search, users]);

  useEffect(() => {
    dispatch(fetchSearchUser(arrSearch));
    dispatch(fetchUsers());
  }, [arrSearch, dispatch]);

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
