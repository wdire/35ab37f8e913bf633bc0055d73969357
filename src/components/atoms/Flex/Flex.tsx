import React from "react";

type FlexType = {
    flex:"flex" | "flex-item";
    flexDirection?:"flex-dc" | "flex-dr";
}

require("./styles.scss");

export const Flex:React.FC<FlexType> = (info) => {

    return (
        <>
            <div 
                className={
                    (info.flex ? info.flex : "") +
                    (info.flexDirection ? " "+info.flexDirection : "")
                }
            >
                {info.children}
            </div>
        </>
    )
}