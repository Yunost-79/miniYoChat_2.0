import { Navigate, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';

import { EMainPaths } from './types/Enum';

import './index.scss';

const App = () => {
	const isAuthUser = false;
	return (
		<div className="App">
			<Routes>
				<Route path={EMainPaths.main} element={isAuthUser ? <Home /> : <Navigate to={EMainPaths.login} />} />
				<Route path={EMainPaths.login} element={isAuthUser ? <Navigate to={EMainPaths.main} /> : <Login />} />
				<Route path={EMainPaths.signup} element={isAuthUser ? <Navigate to={EMainPaths.main} /> : <SignUp />} />
			</Routes>
		</div>
	);
};

export default App;
