import styled from 'styled-components';

export const ProfileFormWrapper = styled.form`
  height: calc(80% - 32px);
  width: 320px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  overflow-y: auto;
  scrollbar-width: none;
  position: relative;
  padding: 16px;
  .error-message {
    color: red;
    font-size: 16px;
    position: absolute;
    bottom: 40px;
  }
  .logo-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    img {
      height: 123px;
    }
  }
`;
