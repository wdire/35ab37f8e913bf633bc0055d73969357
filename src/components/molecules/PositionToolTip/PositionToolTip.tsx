import React from "react";

type PositionToolTipType = {
    position:number;
    prevPosition:number;
}

require("./styles.scss");

export const PositionToolTip:React.FC<PositionToolTipType> = (props) => {

    let posChange = "none";

    if(props.position > props.prevPosition){
        posChange = "down";
    }else if(props.position < props.prevPosition){
        posChange = "up";
    }

    return (
        <>
            <span className="pos-value">{props.position}</span>
            <span className={"pos-change " + posChange}>
                <span className="pos-tooltip-container">
                    <span className="pos-tooltip">
                        Previous Position <b>{props.prevPosition}</b>
                    </span>
                </span>
            </span>
        </>
    )
}