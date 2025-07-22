import React from 'react';
import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', style }) => {
    return (
        <button 
            className='button' 
            onClick={onClick} 
            type={type} 
            style={style}>
            {children}
        </button>
    )
}

export default Button;