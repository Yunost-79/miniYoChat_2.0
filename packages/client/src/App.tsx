import { Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';

import usePrivateRoutes from './hooks/protectRoutes/protectedRoutes';

import { EMainPaths } from './types/Enum';

import './index.scss';

const App = () => {
  const { ProtectedRoute, AuthRoute } = usePrivateRoutes();

  return (
    <div className="App">
      <Routes>
        <Route
          path={EMainPaths.main}
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path={EMainPaths.login}
          element={
            <AuthRoute>
              <Login />
            </AuthRoute>
          }
        />
        <Route
          path={EMainPaths.signup}
          element={
            <AuthRoute>
              <SignUp />
            </AuthRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
