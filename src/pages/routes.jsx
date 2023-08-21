import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from './Main';
import { Login } from './Login';
import { Account } from './Account/Account';

export const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  </Router>
);
