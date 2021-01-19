import React from "react";
import { FormItem, FormTeamType, FormType } from "../../molecules/FormItem/FormItem";

type ExpandRowType = {
    latestMatch: {
        this_team:FormTeamType,
        other_team:FormTeamType
        date:string
    };
    nextMatch: {
        this_team:FormTeamType,
        other_team:FormTeamType,
        date:string,
        time:string
    };
    expanderId:number;
    expanded:boolean;
}

require("./styles.scss");

export const ExpandRow:React.FC<ExpandRowType> = (props) => {

    return (
        <tr className={"expandable-row" + (props.expanded ? " expanded" : "")}>
           <td colSpan={13}>
               
           </td>
        </tr>
    )
}