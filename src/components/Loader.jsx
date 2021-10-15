import React from 'react';
import { Spin } from 'antd';

const Loader = () => {
    return (
        <div className="loader">
            <Spin tip="Loading..." size="large"/>
        </div>
    )
}

export default Loader;
