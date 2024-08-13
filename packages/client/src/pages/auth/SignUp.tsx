import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Button } from '@mui/material';
import { AxiosError } from 'axios';

import { signUp } from '../../API/axiosRequests';
import { useLightModeStore } from '../../zustand/customModes/useLightModeStore';
import useAuthStore from '../../zustand/useAuthStore';
import { signUpValidationSchema } from '../../yup/yupSchemas';

import AuthInput from '../../components/UI/Inputs/AuthInput/AuthInput';
import SwitchLightModeButton from '../../components/UI/Buttons/SwitchLightModeButton/SwitchLightButton';

import { SignUpUserData } from '../../types/globalTypes';
import { EMainPaths, ESignUp } from '../../types/Enum';

import './Auth.scss';

const SignUp = () => {
  const { isLightMode } = useLightModeStore();
  const { setIsAuth } = useAuthStore();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      rePassword: '',
    },
    validationSchema: signUpValidationSchema,
    onSubmit: async (values, { setFieldError }) => {
      const userData: SignUpUserData = {
        email: values.email.trim(),
        username: values.username.trim(),
        password: values.password.trim(),
        rePassword: values.rePassword.trim(),
      };

      try {
        const response = await signUp(userData);
        if (response) {
          setIsAuth(true);
          navigate(EMainPaths.main);
        }
        console.log('User signed up:', response);
      } catch (e) {
        const err = e as AxiosError;
        if (err.response && err.response.data) {
          const errorData = err.response.data as { error?: { type: string; text: string } };
          console.log('errorData', errorData);

          if (errorData.error?.type === ESignUp.username) {
            setFieldError(ESignUp.username, errorData.error.text);
          }

          if (errorData.error?.type === ESignUp.email) {
            setFieldError(ESignUp.email, errorData.error.text);
          }
        } else {
          console.error('Unexpected error:', err.message || 'Unknown error');
        }
      }
    },
  });

  console.log('formik.errors', formik.errors);
  return (
    <div className={`wrapper_auth ${isLightMode ? 'light' : ''}`}>
      <div className="auth_container">
        <div className="auth_title">
          <h1>Sign Up</h1>
          <h2>Register to Mini Yo Chat</h2>
        </div>
        <form className="auth_form" onSubmit={formik.handleSubmit}>
          <AuthInput
            isLightMode={isLightMode}
            name={ESignUp.email}
            type="text"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <AuthInput
            isLightMode={isLightMode}
            name={ESignUp.username}
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
            name={ESignUp.password}
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <AuthInput
            isLightMode={isLightMode}
            name={ESignUp.rePassword}
            type="password"
            placeholder="Repeat password"
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.rePassword && Boolean(formik.errors.rePassword)}
            helperText={formik.touched.rePassword && formik.errors.rePassword}
          />
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
