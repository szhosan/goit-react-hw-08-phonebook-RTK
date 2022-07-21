import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getIsLoggedIn } from 'redux/auth/authSlice';

export default function PrivateRoute({ children, redirectTo = '/' }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
}

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
