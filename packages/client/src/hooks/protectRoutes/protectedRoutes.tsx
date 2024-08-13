import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthStore } from '../../zustand/authStores/useAuthStore';

import { EMainPaths } from '../../types/Enum';

interface ProtectedRouteProps {
  children: ReactElement;
}

const usePrivateRoutes = () => {
  const { isAuth } = useAuthStore();

  const ProtectedRoute = (props: ProtectedRouteProps) => {
    const { children } = props;
    return isAuth ? children : <Navigate to={EMainPaths.login} />;
  };

  const AuthRoute = (props: ProtectedRouteProps) => {
    const { children } = props;
    return isAuth ? <Navigate to={EMainPaths.main} /> : children;
  };

  return { ProtectedRoute, AuthRoute };
};

export default usePrivateRoutes;
