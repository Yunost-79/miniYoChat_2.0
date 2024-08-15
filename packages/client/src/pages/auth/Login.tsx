import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Button } from '@mui/material';
import { AxiosError } from 'axios';

import { login } from '../../API/axiosRequests';
import { useLightModeStore } from '../../zustand/customModesStores/useLightModeStore';
import { useAuthStore } from '../../zustand/authStores/useAuthStore';
import { loginValidationSchema } from '../../yup/yupSchemas';

import AuthInput from '../../components/UI/Inputs/AuthInput/AuthInput';
import SwitchLightModeButton from '../../components/UI/Buttons/SwitchLightModeButton/SwitchLightButton';
import Loader from '../../components/UI/Loader/Loader';

import { LoginUserData } from '../../types/globalTypes';
import { ELogin, EMainPaths } from '../../types/Enum';

import './Auth.scss';

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { isLightMode } = useLightModeStore();
  const { setIsAuth } = useAuthStore();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values, { setFieldError }) => {
      const userData: LoginUserData = {
        username: values.username.trim(),
        password: values.password.trim(),
      };

      try {
        setLoading(true);
        const response = await login(userData);
        if (response) {
          setIsAuth(true);
          navigate(EMainPaths.main);

          // if (socket) {
          //   socket.emit('addUser', response.user._id);
          // }
        }
      } catch (e) {
        const err = e as AxiosError;

        if (err.response && err.response.data) {
          const errorData = err.response.data as { error?: { type: string; text: string } };

          if (errorData.error?.type === ELogin.username) {
            setFieldError(ELogin.username, errorData.error.text);
          }

          if (errorData.error?.type === ELogin.password) {
            setFieldError(ELogin.password, errorData.error.text);
          }
        } else {
          console.error('Unexpected error:', err.message || 'Unknown error');
        }
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className={`wrapper_auth ${isLightMode ? 'light' : ''}`}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="auth_container">
            <div className="auth_title">
              <h1>Login</h1>
              <h2>Welcome to Mini Yo Chat</h2>
            </div>
            <form className="auth_form" onSubmit={formik.handleSubmit}>
              <AuthInput
                isLightMode={isLightMode}
                name={ELogin.username}
                type="text"
                placeholder="Username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
              />
              <AuthInput
                isLightMode={isLightMode}
                name={ELogin.password}
                type="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />

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
        </>
      )}
    </div>
  );
};

export default Login;
