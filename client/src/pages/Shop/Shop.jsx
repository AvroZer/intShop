import React from "react";
// import TypeBar from '../../components/TypeBar/TypeBar';

import style from './Shop.module.css'
import DeviceList from '../../components/DeviceList/DeviceList';

const Shop = () => {
    return (
        <main className={style.main}>
            <div className={style.container}>
                <div className="menu">
                    {/* <TypeBar /> */}
                </div>
                <DeviceList />
            </div>
        </main>
    );
};

export default Shop;
