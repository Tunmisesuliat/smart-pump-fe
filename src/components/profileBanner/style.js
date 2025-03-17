import styled from 'styled-components';
export const ProfileBannerWrapper = styled.div`
  width: 100%;
  height: 20%;
  background: rgb(13, 13, 112);
  background: linear-gradient(
    130deg,
    rgba(13, 13, 112, 1) 26%,
    rgba(2, 0, 36, 1) 59%,
    rgba(0, 212, 255, 1) 100%
  );
  display: flex;
  justify-content: flex-start;
  padding: 25px 10%;
  box-sizing: border-box;
  align-items: center;
  .profile-banner-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .user-details-container {
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    height: fit-content;
  }
  .user-details {
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: #ccc;
    font-size: 16px;
  }
  .logout {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    color: #fff;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  /* Mobile Styles */
  @media (max-width: 768px) {
    .profile-banner-container {
      flex-direction: column;
    }
    .logout {
      align-self: flex-end;

      margin-top: 20px;
    }
  }
`;
