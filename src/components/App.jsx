import Section from './Section/Section';

import { lazy, Suspense } from 'react';

import PhoneBookAppBar from './PhoneBookAppBar/PhoneBookAppBar';
import { Routes, Route } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Navigate } from 'react-router-dom';
import Progress from './Progress/Progress';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentToken,
  getError,
  setCredentials,
  setError,
} from 'redux/auth/authSlice';
import { useEffect } from 'react';
import { useFetchCurrentUserQuery } from 'redux/auth/authApiSlice';
const RegisterForm = lazy(() => import('./RegisterForm/RegisterForm'));
const LoginForm = lazy(() => import('./LoginForm/LoginForm'));
const ContactsView = lazy(() => import('./ContactsView/ContactsView'));

function App() {
  const currentToken = useSelector(getCurrentToken);
  const errorMessage = useSelector(getError);
  const dispatch = useDispatch();
  //console.log('current token', !currentToken);
  const { data, isLoading: isFetchingCurUser } = useFetchCurrentUserQuery(
    true,
    {
      skip: !currentToken,
    }
  );
  //console.log('data', data);
  useEffect(() => {
    if (data) {
      dispatch(setCredentials({ user: data, token: currentToken }));
    }
  }, [currentToken, data, dispatch]);

  const handleErrorClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(setError(null));
  };

  return (
    <Section>
      {isFetchingCurUser ? (
        <Progress />
      ) : (
        <>
          <PhoneBookAppBar />
          <Suspense fallback={<Progress />}>
            <Routes>
              <Route path="*" element={<Navigate to="/contacts" />} />
              <Route
                path="/login"
                element={
                  <PublicRoute restricted>
                    <LoginForm />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute restricted>
                    <RegisterForm />
                  </PublicRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login">
                    <ContactsView />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Suspense>
        </>
      )}
      <Snackbar
        open={errorMessage}
        autoHideDuration={5000}
        onClose={handleErrorClose}
      >
        <MuiAlert
          severity="error"
          sx={{ width: '100%' }}
          onClose={handleErrorClose}
        >
          {errorMessage}
        </MuiAlert>
      </Snackbar>
    </Section>
  );
}

export default App;
