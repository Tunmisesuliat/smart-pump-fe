import InputComponent from '../../common/inputComponent';
import SubmitButton from '../../common/submitButton';
import { LoginFormWrapper } from './style';
import { useForm } from 'react-hook-form';
import logo from '../../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../utils/api';


interface LoginFormInputs {
    email: string;
    password: string;
  }

const LoginForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
    //   const res = await login(data);
    //   localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch {
      alert("Invalid credentials");
    }
  };


  return (
    <LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <div className="logo-wrapper">
        <img src={logo} alt="logo" />
      </div>
      <InputComponent
        label="email"
        register={register('email')}
        // placeholder="Enter u"
      />
      <InputComponent
        label="Password"
        register={register('password')}
        // placeholder="Enter password"
      />
      <SubmitButton style={{ marginTop: '20px' }} label="LOGIN" />
    </LoginFormWrapper>
  );
};

export default LoginForm;
