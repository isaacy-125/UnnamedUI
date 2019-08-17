import * as React from 'react';
import styled, { css } from 'styled-components';

export interface UnCodeCardProps {
    children?: React.Component;
    code?: React.Component;
}

const StyledCodeCard = styled.div`
    border: 1px solid #B7B6C1;
    padding: 20px;
`;

const mixinBorder = css`
    border-left: 1px solid #B7B6C1;
    border-right: 1px solid #B7B6C1;
    border-bottom: 1px solid #B7B6C1;
`;

const StyledCode = styled.div`
    ${mixinBorder}
    padding-top: 10px;
    padding-bottom: 10px;
    white-space: pre-wrap;
`;

const StyledShowCode = styled.div`
    ${mixinBorder}
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    &:hover {
        background-color: #4F6D7A;
        color: white;
        cursor: pointer;
    }
`;

const UnCodeCard: (React.FC & any) = (props: UnCodeCardProps) => {
    const [showCodeIf, setShowCodeIf] = React.useState(false);
    function showCode(): void {
        setShowCodeIf(!showCodeIf);
    }
    return (
        <>
            <StyledCodeCard>
                {props.children}
            </StyledCodeCard>
            <StyledCode
                style={{
                    display: showCodeIf && props.code ? 'block' : 'none'
                }}
            >
                {props.code}
            </StyledCode>
            <StyledShowCode onClick={showCode}>
                {showCodeIf ? '隐藏代码' : '显示代码'}
            </StyledShowCode>
        </>
    )
}

export default UnCodeCard;
