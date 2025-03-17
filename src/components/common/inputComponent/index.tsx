/* eslint-disable react/react-in-jsx-scope */
import { InputHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string; // Optional error message support
}

const InputComponent = forwardRef<HTMLInputElement, InputProps>(
  ({ label, errorMessage, ...props }, ref) => {
    return (
      <InputComponentWrapper>
        {label && <label htmlFor={props.id}>{label}</label>}
        <CustomInput {...props} ref={ref} />
        {errorMessage && <span className="error">{errorMessage}</span>}
      </InputComponentWrapper>
    );
  }
);
InputComponent.displayName = 'InputComponent';
export default InputComponent;

const InputComponentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  .error {
    color: red;
    position: absolute;
    bottom: -18px;
    font-size: 12px;
  }
`;

const CustomInput = styled.input`
  background: #ffffff;
  border: 1px solid #d6d6d6;
  height: 44px;
  padding: 12px;
  box-sizing: border-box;
  border-radius: 8px;
  &:focus,
  &:focus-visible,
  &:hover,
  &:active {
    border: 1px solid #d6d6d6;
    outline: 0;
  }
`;
