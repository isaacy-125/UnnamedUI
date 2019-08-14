import * as React from 'react';

interface UnButtonProps {
    children: string;
}

export const UnButton: React.FC = (props: UnButtonProps) => {
    return (
        <button>
            {props.children}
        </button>
    )
}
