import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import css from './UserMenu.module.css';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>
        Welcome, {user.name}, email: {user.email}
      </p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
