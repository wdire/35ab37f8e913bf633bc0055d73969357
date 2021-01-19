import React from "react";
import { Forms } from "../../organisms/Forms/Forms";
import { FormTeamType, FormType } from "../FormItem/FormItem";
import { NextMatch } from "../NextMatch/NextMatch";
import { PositionToolTip } from "../PositionToolTip/PositionToolTip";
import { TeamName } from "../TeamName/TeamName";

type RowInfoType = {
    position:number;
    prevPosition:number;
    teamName:string;
    teamImage:string;
    played:number;
    won:number;
    drawn:number;
    lost:number;
    gf:number;
    ga:number;
    gd:string;
    points:number;
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
    form: FormType[];
}

type formInfoType = {
    
}

require("./styles.scss");

export const Row:React.FC<{info:RowInfoType}> = (props) => {

    return (
        <tr>
            <td className="revealMore">
                <img src="./images/arrow-down.png"/>
            </td>
            <td className="pos-tooltip-button"><PositionToolTip position={props.info.position} prevPosition={props.info.prevPosition} /></td>
            <td className="t-left"> <TeamName teamName={props.info.teamName} image={"images/"+props.info.teamImage}/></td>
            <td>{props.info.played}</td>
            <td>{props.info.won}</td>
            <td>{props.info.drawn}</td>
            <td>{props.info.lost}</td>
            <td>{props.info.gf}</td>
            <td>{props.info.ga}</td>
            <td>{props.info.gd}</td>
            <td><b>{props.info.points}</b></td>
            <td><Forms forms={props.info.form}/></td>
            <td><NextMatch nextMatch={props.info.nextMatch}/></td>
        </tr>
    )
}