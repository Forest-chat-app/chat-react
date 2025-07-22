import './Input.scss';
import React, { forwardRef, InputHTMLAttributes } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

// 定义组件的Props接口，扩展标准input属性
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  errorPosition?: 'top' | 'bottom' | 'right';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, type, value, style, placeholder, onChange, error, errorPosition = 'top', onBlur, className, ...rest }, ref) => {
    return (
      <div className="input-group" style={style}>
        <label htmlFor={id}>{label}</label>
        <input
          ref={ref}
          type={type} 
          id={id} 
          value={value} 
          placeholder={placeholder} 
          onChange={onChange} 
          onBlur={onBlur}
          className={`${className || ''} ${error ? 'input-error' : ''}`}
          {...rest}
        />
        {error && <ErrorMessage message={error} position={errorPosition} />}
      </div>
    );
  }
);

export default Input;