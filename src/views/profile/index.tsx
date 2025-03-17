/* eslint-disable react/react-in-jsx-scope */
import AppLayout from '../../components/layout/appLayout';
import ProfileDetailsForm from '../../components/profileDetailsForm';
import { useAuth } from '../../contexts/authContext';
import { ProfileWrapper } from './style';

const Profile = () => {
  const { user } = useAuth();

  console.log('user===', user);
  return (
    <AppLayout>
      <ProfileWrapper>
        <ProfileDetailsForm />
      </ProfileWrapper>
    </AppLayout>
  );
};

export default Profile;
