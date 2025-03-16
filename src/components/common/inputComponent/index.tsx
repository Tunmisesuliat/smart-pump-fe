import { InputHTMLAttributes, forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  label?: string;
}

const InputComponent = forwardRef<HTMLInputElement, InputProps>(
  ({ label, register, ...rest }, ref) => {
    return (
      <InputComponentWrapper>
        {label && <label>{label}</label>}
        <CustomInput {...register} {...rest} ref={ref} />
      </InputComponentWrapper>
    );
  }
);

export default InputComponent;

const InputComponentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
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
