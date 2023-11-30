import React, { useState } from "react";

import style from "./DevicePage.module.css";

const DevicePage = () => {
    const ROM = [124, 256, 512, 1024];
    const [currentSize, setCurrentSize] = useState();

    const device = {
        id: 1,
        name: "iPhone 15 Pro Max",
        price: 204990,
        img: `https://istudio-kazan.ru/a/istudio/files/multifile/2353/15pro_natural_40.webp`,
    };

    return (
        <div className={style.device}>
            <div className={style.container}>
                <div className={style.device__content}>
                    <div className={style.device__img}>
                        <img src={device.img} alt="" />
                    </div>
                    <div className={style.device__feature}>
                        <div className={style.list}>
                            {ROM.map((size) => (
                                <div
                                    onClick={() => setCurrentSize(size)}
                                    className={`${style.size} 
                                    ${currentSize === size 
                                        ? style.active 
                                        : ""
                                    }`}
                                    key={size}
                                >
                                    {size}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={style.device__title}>
                        <h3>{device.name}</h3>
                        <p>{device.price} ₽</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevicePage;
