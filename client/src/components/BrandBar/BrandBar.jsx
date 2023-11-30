import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import style from "./BrandBar.module.css";
import { Context } from "../..";

const BrandBar = observer(() => {
    const { device } = useContext(Context);

    return (
        <div className={style.dropdown}>
            <div className={style.dropdown__drop}>
                <ul className={style.dropdown__list}>
                    {device.brands.map((brand) => (
                        <li 
                            className={
                                brand.id === device.selectedBrand.id
                                ? `${style.dropdown__item} ${style.dropdown__item__active}`
                                : `${style.dropdown__item}`
                            }
                            key={brand.id}
                            onClick={() => device.setSelectedBrand(brand)}
                        >
                            {brand.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
});

export default BrandBar;
