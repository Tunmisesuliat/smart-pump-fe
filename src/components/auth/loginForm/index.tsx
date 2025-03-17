/* eslint-disable react/react-in-jsx-scope */
import InputComponent from '../../common/inputComponent';
import SubmitButton from '../../common/submitButton';
import { LoginFormWrapper } from './style';
import { useForm } from 'react-hook-form';
import logo from '../../../assets/logo.png';
import { useAuth } from '../../../contexts/authContext';
import { useState } from 'react';

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const { loading, loginUser } = useAuth();
  const [errorMessage, setErrorMessage] = useState('');
  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const message = await loginUser(data);
      if (message) {
        setErrorMessage(message);
      }
    } catch {
      setErrorMessage('Invalid credentials');
    }
  };

  return (
    <LoginFormWrapper
      data-testid="login-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="logo-wrapper">
        <img src={logo} alt="logo" />
      </div>
      <InputComponent
        id="email"
        label="Email"
        errorMessage={errors.email?.message}
        {...register('email', { required: 'Email is required' })}
      />
      <InputComponent
        id="password"
        label="Password"
        errorMessage={errors.password?.message}
        {...register('password', { required: 'Password is required' })}
      />
      <SubmitButton
        disabled={loading}
        style={{ marginTop: '20px' }}
        label="Login"
        name="Login"
      />
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </LoginFormWrapper>
  );
};

export default LoginForm;
