import * as React from 'react';
import UnButton from './components/UnButton';

const Layout: React.FC = () => {
    return (
        <>
            <h1>Button</h1>
            <UnButton>普通按钮</UnButton>
            <UnButton disabled>禁用按钮</UnButton>
        </>
    );
};
export default Layout;


