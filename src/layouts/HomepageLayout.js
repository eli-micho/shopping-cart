import React from 'react';
import Sidebar from '../components/Sidebar';

const HomepageLayout = (props) => {
    return (
        <div className="full-height">
            <Sidebar />
            {props.children}
            
        </div>
    );
};

export default HomepageLayout;
