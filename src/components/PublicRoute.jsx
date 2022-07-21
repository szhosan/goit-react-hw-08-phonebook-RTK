import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import PropTypes from 'prop-types';
import { getIsLoggedIn } from 'redux/auth/authSlice';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/contacts',
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return <>{shouldRedirect ? <Navigate to={redirectTo} /> : children}</>;
}

PublicRoute.propTypes = {
  restricted: PropTypes.bool,
  redirectTo: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
