import * as React from 'react';
import styled, { css } from 'styled-components';

export interface UnButtonProps {
    children?: string;
    disabled?: boolean;
}

const normalMixin = css`
    &:hover {
        cursor: pointer;
    }
    &:active {
        border-color: #247BA0;
    }
`;

const disabledMixin = css`
    opacity: 0.5;
    cursor: not-allowed;
`;


const StyledButton = styled.button`
    border: 1px solid #B2DBBF;
    outline: none;
    padding: 8px;
    border-radius: 5px;
    color: white;
    background-color: #70C1B3;
    ${(props: UnButtonProps) => props.disabled ? disabledMixin : normalMixin}
`;

export const UnButton: (React.FC & any) = (props: UnButtonProps) => {
    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    )
};
