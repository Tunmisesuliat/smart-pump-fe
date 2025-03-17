import React from 'react';
import styled from 'styled-components';

interface SubmitButtonProps {
  label?: string;
  style?: React.CSSProperties;
  name?: string;
  disabled?: boolean;
}

const SubmitButton = ({
  label = 'Submit',
  style,
  name = 'submit',
  disabled = false,
}: SubmitButtonProps) => {
  return (
    <ButtonComponent
      type="submit"
      style={style}
      name={name}
      disabled={disabled}
    >
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
  text-transform: capitalize;
  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;
