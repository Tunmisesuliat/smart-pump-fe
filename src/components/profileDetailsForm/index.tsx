/* eslint-disable react/react-in-jsx-scope */
import { useForm } from 'react-hook-form';
import { LoginFormWrapper } from '../auth/loginForm/style';
import InputComponent from '../common/inputComponent';
import SubmitButton from '../common/submitButton';
import { Avatar } from '@mui/material';

const ProfileDetailsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => console.log('hello');

  return (
    <LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Avatar sx={{ width: 70, height: 70 }} src="/broken-image.jpg" />
      <InputComponent label="First Name" register={register('first_name')} />
      <InputComponent label="Last Name" register={register('last_name')} />
      <InputComponent label="Email" register={register('email')} />
      <InputComponent label="Company" register={register('company')} />
      <InputComponent label="Address" register={register('address')} />
      <InputComponent label="Phone" register={register('phone')} />
      <SubmitButton style={{ marginTop: '20px' }} label="Update" />
    </LoginFormWrapper>
  );
};

export default ProfileDetailsForm;
