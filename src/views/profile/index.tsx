/* eslint-disable react/react-in-jsx-scope */
import AppLayout from '../../components/layout/appLayout';
import ProfileBanner from '../../components/profileBanner';
import ProfileDetailsForm from '../../components/profileDetailsForm';
import { useAuth } from '../../contexts/authContext';
import { ProfileWrapper } from './style';

const Profile = () => {
  const { user } = useAuth();

  console.log('user===', user);
  return (
    <AppLayout>
      <ProfileWrapper>
        <ProfileBanner />
        <ProfileDetailsForm />
      </ProfileWrapper>
    </AppLayout>
  );
};

export default Profile;
