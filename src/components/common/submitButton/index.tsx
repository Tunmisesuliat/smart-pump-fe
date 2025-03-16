import React from 'react';
import styled from 'styled-components';

interface SubmitButtonProps {
  label?: string;
  style?: React.CSSProperties;
}

const SubmitButton = ({ label = 'Submit', style }: SubmitButtonProps) => {
  return (
    <ButtonComponent type="submit" style={style}>
      {label}
    </ButtonComponent>
  );
};

export default SubmitButton;

const ButtonComponent = styled.button`
  background-color: #525252;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
  width: 100%;
  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;
