import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';

import { useLightModeStore } from './zustand/customModesStores/useLightModeStore';

import usePrivateRoutes from './hooks/protectRoutes/protectedRoutes';

import { EMainPaths } from './types/Enum';

import './App.scss';

const App = () => {
  const { ProtectedRoute, AuthRoute } = usePrivateRoutes();

  const { isLightMode } = useLightModeStore();

  useEffect(() => {
    document.body.classList.toggle('light', isLightMode);
  }, [isLightMode]);

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
