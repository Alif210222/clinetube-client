
import Footer from '@/src/component/shared/footer';
import Navbar from '@/src/component/shared/navbar';
import React from 'react';

const CommonLayout = ({children} :{children: React.ReactNode}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default CommonLayout;