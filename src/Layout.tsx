import * as React from 'react';
import UnButton from './components/UnButton';
import UnCodeCard from './components/UnCodeCard';

const Layout: React.FC = () => {
    const UnButtonCode = `
        <UnButton>普通按钮</UnButton>
        <UnButton disabled>禁用按钮</UnButton>
    `;
    return (
        <>
            <h1>Button</h1>
            <UnCodeCard
                code={UnButtonCode}
            >
                <UnButton>普通按钮</UnButton>
                <UnButton disabled>禁用按钮</UnButton>
            </UnCodeCard>
        </>
    );
};
export default Layout;


