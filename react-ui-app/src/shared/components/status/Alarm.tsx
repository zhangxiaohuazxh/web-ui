import React from "react";
import '@/assets/styles/alarm.css'

export default function Alarm(): React.ReactElement {

    return (<>
        <div className="siren-light-container">
            <div className="siren-light red-light"></div>
            <div className="siren-light blue-light"></div>
        </div>
    </>)

}