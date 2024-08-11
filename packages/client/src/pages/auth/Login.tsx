import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import { useLightModeStore } from '../../zustand/customModes/useLightModeStore';
import useAuthStore from '../../zustand/useAuthStore';

import AuthInput from '../../components/UI/Inputs/AuthInput/AuthInput';
import SwitchLightModeButton from '../../components/UI/Buttons/SwitchLightModeButton/SwitchLightButton';

import { EMainPaths } from '../../types/Enum';

import './Auth.scss';

const Login = () => {
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');

  const { isLightMode } = useLightModeStore();
  const { setIsAuth } = useAuthStore();

  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    setIsAuth(true);
    navigate(EMainPaths.main);

    console.log('Email:', emailValue, 'Password:', passwordValue);
  };

  return (
    <div className={`wrapper_auth ${isLightMode ? 'light' : ''}`}>
      <div className="auth_container">
        <div className="auth_title">
          <h1>Login</h1>
          <h2>Welcome to Mini Yo Chat</h2>
        </div>
        <form className="auth_form" onSubmit={handleLogin}>
          <AuthInput isLightMode={isLightMode} type="text" placeholder="Email" value={emailValue} setValue={setEmailValue} />
          <AuthInput isLightMode={isLightMode} type="password" placeholder="Password" value={passwordValue} setValue={setPasswordValue} />
          <Button className="auth_button" type="submit">
            Login
          </Button>
        </form>
        <div className="auth_switch">
          <span className="change_text">First time at Mini Yo Chat?</span>
          <div className="change_subtext">
            <span className="subtext_title">Create an account</span>
            <Link className="subtext_link" to={EMainPaths.signup}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <SwitchLightModeButton />
    </div>
  );
};

export default Login;
