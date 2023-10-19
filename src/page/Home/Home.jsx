import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from '../../services/slice/userSlice';
import Container from '../../components/Container/Container';
import SearchUser from '../../components/SearchUser/SearchUser';
import UsersList from '../../components/UsersList/UsersList';
import UserDescription from '../../components/UserDescription/UserDescription';
import styles from './Home.module.scss';

const Home = () => {
  const { users } = useSelector((state) => state.users);
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(null);
  const dispatch = useDispatch();

  const handleSearch = (search) => {
    let data = [];

    // const arrSearch = search?.split(',');

    // if (search) {
    //   data.push(
    //     users.filter((user) =>
    //       user.username
    //         .toLowerCase()
    //         .includes(arrSearch.map((name) => name.trim().toLowerCase())),
    //     ),
    //   );
    // }

    console.log(users);

    if (search) {
      data = data.filter((user) => {
        user.username.toLowerCase().includes(search.toLowerCase());
      });
    }

    // console.log(arrSearch.map((name) => name.trim()));

    console.log(search?.trim().toLowerCase());

    console.log(data);
    setFilteredUsers(data);
  };

  console.log(search);

  useEffect(() => {
    handleSearch();
  }, [users]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log(filteredUsers);

  return (
    <Container>
      <>
        <div className={styles.wrapper}>
          <SearchUser
            title="Поиск сотрудников"
            placeholder="Введите id или имя"
            type="text"
            search={search}
            setSearch={setSearch}
          />
          <UsersList
            title="Результаты"
            users={filteredUsers}
            subtitle="начните поиск"
          />
        </div>
        <UserDescription description="Выберите сотрудника, чтобы посмотреть его профиль" />
      </>
    </Container>
  );
};

export default Home;
