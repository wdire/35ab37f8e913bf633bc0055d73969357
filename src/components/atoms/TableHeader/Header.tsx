import React from "react";

type TableHeaderInfoType = {
    position?:"center" | "left";
    paddingLeft?:number;
}

export const TableHeader:React.FC<TableHeaderInfoType> = (props) => {

    let paddingLeft = props.paddingLeft ? "padding-left:"+(props.paddingLeft + "px;") : "";

    return (
        <th className={
            (props.position ? ("t-header_" + props.position) : "")
        }
        style={{paddingLeft}}
        >{props.children}</th>
    )
}