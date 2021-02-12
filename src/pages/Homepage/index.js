import React from 'react';
import Sidebar from '../../components/Sidebar';
import './styles.scss';

const Homepage = (props) => {
    return (
        <div className="homepage">
            <div className="bg-image"></div>

            <div className="homepage-text">
                <h1>Plants</h1>
                <p>Home of All Things Green.</p>
            </div>
        </div>
    );
};

export default Homepage;
