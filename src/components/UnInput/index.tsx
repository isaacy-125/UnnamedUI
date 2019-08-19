import * as React from 'react';
import styled, { css } from 'styled-components';

export interface UnInputProps {
    type: string;
    placeholder: string;
    disabled: boolean;
}

const normalMixin = css`
    &:focus {
        border: 1px solid #5C5953;
    }
`;

const disabledMixin = css`
    opacity: 0.5;
    cursor: not-allowed;
`;

const StyledInput = styled.input`
    outline: none;
    border-radius: 5px;
    border: 1px solid #AAAAA3;
    padding: 5px;
    ${(props: UnInputProps): any => props.disabled ? disabledMixin : normalMixin}
`;

const UnInput: (React.FC & any) = ({ type='text', ...props}: UnInputProps) => {
    return (
        <StyledInput
            {...props}
            type={type}
        ></StyledInput>
    )
};

export default UnInput;
