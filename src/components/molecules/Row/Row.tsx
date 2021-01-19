import React from "react";
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
    gd:number;
    points:number;
    nextMatch:object;
    latestMatch:object;
    form:object[];
}

type formInfoType = {
    
}

export const Row:React.FC<{info:RowInfoType}> = (props) => {

    return (
        <tr>
            <td>\/</td>
            <td>{props.info.position}</td>
            <td> <TeamName teamName={props.info.teamName} image="t001.png"/> </td>
            <td>{props.info.played}</td>
            <td>{props.info.won}</td>
            <td>{props.info.drawn}</td>
            <td>{props.info.lost}</td>
            <td>{props.info.gf}</td>
            <td>{props.info.ga}</td>
            <td>{props.info.gd}</td>
            <td>{props.info.points}</td>
        </tr>
    )
}