import React from "react";

type TableHeaderInfoType = {
    position?:"left";
    paddingLeft?:number;
}

require("./styles.scss");

export const TableHeader:React.FC<TableHeaderInfoType> = (props) => {

    return (
        <th className={
            (props.position ? ("t-" + props.position) : undefined)
        }
        style={ props.paddingLeft ? {paddingLeft:props.paddingLeft} : {}}
        >{props.children}</th>
    )
}