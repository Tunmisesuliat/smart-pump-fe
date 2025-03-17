/* eslint-disable react/react-in-jsx-scope */
import AppLayout from '../../components/layout/appLayout';
import ProfileBanner from '../../components/profileBanner';
import ProfileDetailsForm from '../../components/profileDetailsForm';
import { ProfileWrapper } from './style';

const Profile = () => {
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
