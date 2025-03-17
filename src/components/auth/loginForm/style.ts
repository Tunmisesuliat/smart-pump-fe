import styled from 'styled-components';

export const LoginFormWrapper = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  oerflow-y: auto;
  position: relative;
  .error {
    color: red;
    font-size: 12px;
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
