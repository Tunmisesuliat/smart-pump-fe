import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
/* eslint-disable react/react-in-jsx-scope */
import { Avatar } from '@mui/material';
import { ProfileBannerWrapper } from './style';
import { useAuth } from '../../contexts/authContext';
import LogoutIcon from '@mui/icons-material/Logout';
const ProfileBanner = () => {
  const { user, logoutUser } = useAuth();
  return _jsx(ProfileBannerWrapper, {
    children: _jsxs('div', {
      className: 'profile-banner-container',
      children: [
        _jsxs('div', {
          className: 'user-details-container',
          children: [
            _jsx(Avatar, { src: '/broken-image.jpg' }),
            _jsxs('div', {
              className: 'user-details',
              children: [
                _jsxs('div', {
                  children: [
                    ' ',
                    'Hello ',
                    user?.firstName,
                    ' ',
                    user?.lastName,
                    ',',
                  ],
                }),
                _jsxs('div', {
                  children: ['Your Balance: ', user?.balance || 0],
                }),
              ],
            }),
          ],
        }),
        _jsxs('div', {
          className: 'logout',
          onClick: logoutUser,
          children: [
            _jsx('span', { children: 'Logout' }),
            _jsx(LogoutIcon, { sx: { color: 'white' } }),
          ],
        }),
      ],
    }),
  });
};
export default ProfileBanner;
