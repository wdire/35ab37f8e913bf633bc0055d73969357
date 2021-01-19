import React from "react";

require("./styles.scss");

export const Title:React.FC<{}> = (info) => {

    return (
        <>
            <div className={"title"}>
                {info.children}
            </div>
        </>
    )
}