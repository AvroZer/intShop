import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import style from "./DeviceList.module.css";
import { Context } from "../..";
import SingleDevice from '../SingleDevice/SingleDevice';

const DeviceList = observer(() => {
    const { device } = useContext(Context);

    return (
        <ul className={style.cards}>
            {device.devices.map(device =>
                <SingleDevice key={device.id} device={device}/>
            )}
        </ul>  
    );
});

export default DeviceList;
