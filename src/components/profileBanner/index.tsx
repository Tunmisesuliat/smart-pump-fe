/* eslint-disable react/react-in-jsx-scope */
import { Avatar } from '@mui/material';
import { ProfileBannerWrapper } from './style';
import { useAuth } from '../../contexts/authContext';
import LogoutIcon from '@mui/icons-material/Logout';

const ProfileBanner = () => {
  const { user, logoutUser } = useAuth();
  return (
    <ProfileBannerWrapper>
      <div className="profile-banner-container">
        <div className="user-details-container">
          <Avatar src={user?.picture} alt="user" />

          <div className="user-details">
            <div>
              {' '}
              Hello {user?.firstName} {user?.lastName},
            </div>
            <div>Your Balance: {user?.balance || 0}</div>
          </div>
        </div>
        <div className="logout" onClick={logoutUser}>
          <span>Logout</span>
          <LogoutIcon sx={{ color: 'white' }} />
        </div>
      </div>
    </ProfileBannerWrapper>
  );
};

export default ProfileBanner;
