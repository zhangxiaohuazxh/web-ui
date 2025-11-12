import React from 'react'

export default function Alarm(): React.ReactElement {
    return (
        <>
            <div className="siren-light-container">
                <div className="siren-light red-light"></div>
                <div className="siren-light blue-light"></div>
            </div>
        </>
    )
}
