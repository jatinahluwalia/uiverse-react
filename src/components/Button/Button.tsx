import React from 'react';
import './Button.css';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    text: string,
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const { text, className, ...rest } = props;

    return (
        <button {...rest} className={`verse-btn ${className}`}>
            <p>{text}</p>
        </button>
    )
}

export default Button;