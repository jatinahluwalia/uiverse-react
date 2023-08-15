import React from 'react';
import './Squeeze.css';

export interface SqueezeButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    text: string,
}

export const SqueezeButton: React.FC<SqueezeButtonProps> = (props: SqueezeButtonProps) => {
    const { text, className, ...rest } = props;

    return (
        <button {...rest} className={`squeeze-btn ${className}`}>
            {text}
        </button>
    )
}
