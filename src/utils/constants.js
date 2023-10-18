import PropType from 'prop-types';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const ALL_USERS = BASE_URL + '/users';

const searchById = (id) => ALL_USERS + '/' + id;

const dataPropType = PropType.shape({
  id: PropType.number.isRequired,
  name: PropType.string.isRequired,
  username: PropType.string.isRequired,
  email: PropType.string.isRequired,
  address: PropType.object.isRequired,
  phone: PropType.string.isRequired,
  website: PropType.string.isRequired,
  company: PropType.object.isRequired,
  photo: PropType.string,
});

const userDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export { ALL_USERS, searchById, dataPropType, userDescription };
