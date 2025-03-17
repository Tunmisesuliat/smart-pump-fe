/* eslint-disable react/react-in-jsx-scope */
import { useForm } from 'react-hook-form';
import InputComponent from '../common/inputComponent';
import SubmitButton from '../common/submitButton';
import { useAuth } from '../../contexts/authContext';
import { useEffect, useState } from 'react';
import { ProfileFormWrapper } from './style';

interface UserFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  address: string;
  phone: string;
}

const ProfileDetailsForm: React.FC = () => {
  const { user, updateUser } = useAuth(); // Access user details from context
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    setValue, // Use setValue to set default values
    formState: { errors },
  } = useForm<UserFormInputs>();

  // Set default values when user data is available
  useEffect(() => {
    if (user) {
      setValue('firstName', user.firstName || '');
      setValue('lastName', user.lastName || '');
      setValue('email', user.email || '');
      setValue('company', user.company || '');
      setValue('address', user.address || '');
      setValue('phone', user.phone || '');
    }
  }, [user, setValue]); // Re-run effect if user changes

  const onSubmit = async (data: UserFormInputs) => {
    console.log('Updated User Details:', data);
    const message = await updateUser(data);
    if (message) {
      setErrorMessage(message);
    }
  };

  return (
    <ProfileFormWrapper onSubmit={handleSubmit(onSubmit)}>
      {/* <Avatar sx={{ width: 70, height: 70 }} src="/broken-image.jpg" />
      <div>
        <span>Balance:</span>
        <span>{user?.balance || 0}</span>
      </div> */}
      <InputComponent
        label="First Name"
        errorMessage={errors.firstName?.message}
        {...register('firstName', { required: 'firstName is required' })}
      />
      <InputComponent
        label="Last Name"
        errorMessage={errors.lastName?.message}
        {...register('lastName', { required: 'lastName is required' })}
      />
      <InputComponent
        label="Email"
        errorMessage={errors.email?.message}
        {...register('email', { required: 'email is required' })}
      />
      <InputComponent
        label="Company"
        errorMessage={errors.company?.message}
        {...register('company', { required: 'company is required' })}
      />
      <InputComponent
        label="Address"
        errorMessage={errors.address?.message}
        {...register('address', { required: 'address is required' })}
      />
      <InputComponent
        label="Phone"
        errorMessage={errors.phone?.message}
        {...register('phone', { required: 'phone is required' })}
      />

      <SubmitButton style={{ marginTop: '20px' }} label="Update" />
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </ProfileFormWrapper>
  );
};

export default ProfileDetailsForm;
