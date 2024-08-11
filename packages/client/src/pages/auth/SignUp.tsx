import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import { useLightModeStore } from '../../zustand/customModes/useLightModeStore';
import useAuthStore from '../../zustand/useAuthStore';

import AuthInput from '../../components/UI/Inputs/AuthInput/AuthInput';
import SwitchLightModeButton from '../../components/UI/Buttons/SwitchLightModeButton/SwitchLightButton';

import { EMainPaths } from '../../types/Enum';

import './Auth.scss';

const SignUp = () => {
  const [usernameValue, setUserNameValue] = useState<string>('');
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [rePasswordValue, setRePasswordValue] = useState<string>('');

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
          <h1>Sign Up</h1>
          <h2>Register to Mini Yo Chat</h2>
        </div>
        <form className="auth_form" onSubmit={handleLogin}>
          <AuthInput isLightMode={isLightMode} type="text" placeholder="Username" value={usernameValue} setValue={setUserNameValue} />
          <AuthInput isLightMode={isLightMode} type="text" placeholder="Email" value={emailValue} setValue={setEmailValue} />
          <AuthInput isLightMode={isLightMode} type="password" placeholder="Password" value={passwordValue} setValue={setPasswordValue} />
          <AuthInput isLightMode={isLightMode} type="password" placeholder="Repeat password" value={rePasswordValue} setValue={setRePasswordValue} />
          <Button className="auth_button" type="submit">
            Register
          </Button>
        </form>
        <div className="auth_switch">
          <span className="change_text">Do you have an account?</span>
          <div className="change_subtext">
            <span className="subtext_title">Login to account</span>
            <Link className="subtext_link" to={EMainPaths.login}>
              Login
            </Link>
          </div>
        </div>
      </div>
      <SwitchLightModeButton />
    </div>
  );
};

export default SignUp;
