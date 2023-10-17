import { dataPropType } from '../../utils/constants';

const User = ({ user }) => {
  console.log(user);
  return (
    <li>
      <img />
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
    </li>
  );
};

export default User;

User.propTypes = {
  user: dataPropType.isRequired,
};
