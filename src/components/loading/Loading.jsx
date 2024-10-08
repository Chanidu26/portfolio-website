// Loading.js
import React from 'react';
import './loading.css'; // Add some styles for your loading screen
import ScaleLoader from 'react-spinners/ScaleLoader'

const Loading = () => {
    return (
        <div className="loading">
            <ScaleLoader color="#07253a" />
            
        </div>
    );
};

export default Loading;
