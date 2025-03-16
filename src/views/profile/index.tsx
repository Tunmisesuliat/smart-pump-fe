/* eslint-disable react/react-in-jsx-scope */
import AppLayout from '../../components/layout/appLayout';
import ProfileDetailsForm from '../../components/profileDetailsForm';
import { ProfileWrapper } from './style';

const Profile = () => {
  return (
    <AppLayout>
      <ProfileWrapper>
        <ProfileDetailsForm />
      </ProfileWrapper>
    </AppLayout>
  );
};

export default Profile;
