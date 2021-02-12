import React from 'react';
import Sidebar from '../components/Sidebar';

const MainLayout = (props) => {
    return (
        <div>
            <div className="main">
                <Sidebar />
                {props.children}
            </div>
        </div>
    );
};

export default MainLayout;
