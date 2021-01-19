import React from "react";
import { Table } from "../../organisms/Table/Table";

require("./style.scss");

export const Main:React.FC<{}> = (info) => {

    return (
        <div className="main">
            {info.children}
            <Table></Table>
        </div>
    )
}