import './styles.scss';
import { NavLink } from 'react-router-dom';
import { OptionLogon } from './components/OptionLogon';
import { LoginButton } from './components/LoginButton';

export const Login = () => (
  <NavLink to="/login" className="login-btn">
    <OptionLogon />
  </NavLink>
);
