import React from 'react';

/**
 * Renders the preloader
 */
const Loading = () => {
    return (
        <div className="preloader">
            <div className="status">
                <div className="bouncing-loader">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
