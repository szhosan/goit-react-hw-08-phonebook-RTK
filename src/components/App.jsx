import Section from './Section/Section';

import { lazy, Suspense } from 'react';

import PhoneBookAppBar from './PhoneBookAppBar/PhoneBookAppBar';
import { Routes, Route } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import { Navigate } from 'react-router-dom';
import Progress from './Progress/Progress';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentToken, setCredentials } from 'redux/auth/authSlice';
import { useEffect } from 'react';
import { useFetchCurrentUserQuery } from 'redux/auth/authApiSlice';
const RegisterForm = lazy(() => import('./RegisterForm/RegisterForm'));
const LoginForm = lazy(() => import('./LoginForm/LoginForm'));
const ContactsView = lazy(() => import('./ContactsView/ContactsView'));

function App() {
  const currentToken = useSelector(getCurrentToken);
  const dispatch = useDispatch();
  const { data, isLoading: isFetchingCurUser } = useFetchCurrentUserQuery();
  useEffect(() => {
    dispatch(setCredentials({ user: data, token: currentToken }));
  }, [currentToken, data, dispatch]);
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
    </Section>
  );
}

export default App;
