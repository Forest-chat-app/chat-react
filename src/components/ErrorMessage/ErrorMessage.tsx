import React from 'react';
import './ErrorMessage.scss';

interface ErrorMessageProps {
  message: string;
  position?: 'top' | 'bottom' | 'right';
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, position = 'top' }) => {
  return (
    <p className={`error-message error-${position}`}>
      {message}
    </p>
  );
};

export default ErrorMessage; 