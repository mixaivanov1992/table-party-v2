import React from 'react';

const Layout = () => {
    return (
        <>
            <div className="w-[90vw] h-[4em] mt-[1em] bg-gray-300 rounded-b-[0.4em] dark:bg-gray-600 animate-pulse"></div>
            <div className="w-[90vw] h-[calc(100vh-6em)] mt-[1em] bg-gray-200 rounded-t-[0.4em] dark:bg-gray-700 animate-pulse"></div>
        </>
    );
};

export default Layout;