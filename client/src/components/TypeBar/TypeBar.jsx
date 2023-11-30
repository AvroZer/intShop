import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import style from "./TypeBar.module.css";

const TypeBar = observer(() => {
    const { device } = useContext(Context);
    return (
        <div className={style.catalog}>
            <ul className={style.category__list}>
                {device.types.map((type) => (
                    <li
                        onClick={() => device.setSelectedType(type)}
                        key={type.id}
                        className={
                            type.id === device.selectedType.id
                                ? `${style.category__item} ${style.category__item__active}`
                                : `${style.category__item}`
                        }
                    >
                        {type.name}
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default TypeBar;
