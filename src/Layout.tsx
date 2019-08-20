import * as React from 'react';
import UnButton from './components/UnButton';
import UnCodeCard from './components/UnCodeCard';
import UnInput from './components/UnInput';
import styled from 'styled-components';

const StyledMarginDiv = styled.div`
    margin-top: 10px;
`;

const Layout: React.FC = () => {
    const buttons = {
        UnButtonCode:  `
            <UnButton>普通按钮</UnButton>
            <UnButton disabled>禁用按钮</UnButton>
            <UnButton onClick={() => console.log('here')}>点击按钮</UnButton>
        `,
        handelButtonClick: function(): void {
            console.log('here')
        }
    };
    const inputs = {
        UnInputCode: `
            <UnInput></UnInput>
            <UnInput disabled placeholder={'禁用input'}></UnInput>
        `
    };
    return (
        <>
            <h1>Button</h1>
            <UnCodeCard
                code={buttons.UnButtonCode}
            >
                <StyledMarginDiv>
                    <UnButton>普通按钮</UnButton>
                </StyledMarginDiv>
                <StyledMarginDiv>
                    <UnButton disabled>禁用按钮</UnButton>
                </StyledMarginDiv>
                <StyledMarginDiv>
                    <UnButton onClick={buttons.handelButtonClick}>点击按钮</UnButton>
                </StyledMarginDiv>
            </UnCodeCard>
            <h1>Input</h1>
            <UnCodeCard
                code={inputs.UnInputCode}
            >
                <StyledMarginDiv>
                    <UnInput placeholder={'请输入内容'}></UnInput>
                </StyledMarginDiv>
                <StyledMarginDiv>
                    <UnInput
                        disabled
                        placeholder={'禁用input'}
                    ></UnInput>
                </StyledMarginDiv>
            </UnCodeCard>
        </>
    );
};
export default Layout;


