import PropType from 'prop-types';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const ALL_USERS = BASE_URL + '/users';

const searchById = (id) => ALL_USERS + id;

const dataPropType = PropType.shape({
  id: PropType.number.isRequired,
  name: PropType.string.isRequired,
  username: PropType.string.isRequired,
  email: PropType.string.isRequired,
  address: PropType.object.isRequired,
  phone: PropType.string.isRequired,
  website: PropType.string.isRequired,
  company: PropType.object.isRequired,
});

export { ALL_USERS, searchById, dataPropType };
