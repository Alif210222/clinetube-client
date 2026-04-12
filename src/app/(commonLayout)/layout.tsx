
import React from 'react';

const CommonLayout = ({children} :{children: React.ReactNode}) => {
    return (
        <div>
            {children}
            hellow world
        </div>
    );
};

export default CommonLayout;