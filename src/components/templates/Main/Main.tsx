import React from "react";

require("./style.scss");

export const Main:React.FC<{}> = (info) => {

    return (
        <div className="main">
            {info.children}
        </div>
    )
}