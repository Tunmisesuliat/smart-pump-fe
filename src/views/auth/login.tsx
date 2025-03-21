/* eslint-disable react/react-in-jsx-scope */
import LoginForm from '../../components/auth/loginForm';
import AppLayout from '../../components/layout/appLayout';
import { LoginWrapper } from './style';

const Login = () => {
  return (
    <AppLayout data-testid="app-layout">
      <LoginWrapper>
        <LoginForm />
      </LoginWrapper>
    </AppLayout>
  );
};

export default Login;
