import React from "react";
import { TableHeader } from "../../atoms/TableHeader/TableHeader";
import { Row } from "../../molecules/Row/Row";

require("./styles.scss");

import exampleData, { exampleDataType } from "./../../../API/getExampleData";

export const Table:React.FC<{}> = (info) => {

    const COLUMNS = [
        "More", "Position", "Club", "Played", "Won", "Drawn", "Lost", "GF", "GA", "GD", "Points", "Form", "Next"
    ];

    console.log(exampleData);

    return (
        <table>
            <thead>
                <tr>
                    {COLUMNS.map((column, index)=>{
                        if(column === "Club"){
                            return(
                                <TableHeader key={index} position="left" paddingLeft={20}>{column}</TableHeader>
                            )
                        }else if(column === "Form"){
                            return(
                                <TableHeader key={index} shrink>{column}</TableHeader>
                            )
                        }
                        return(
                            <TableHeader key={index}>{column}</TableHeader>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {exampleData.map((club:exampleDataType,index:number)=>(
                    <Row key={index} info={{
                        position:club.position,
                        prevPosition:club.prev_position,
                        teamName:club.name,
                        teamImage:club.image,
                        played:club.info.played,
                        won:club.info.won,
                        drawn:club.info.drawn,
                        lost:club.info.lost,
                        points:club.info.points,
                        form:club.info.form,
                        ga:club.info.ga,
                        gd:club.info.gd,
                        gf:club.info.gf,
                        latestMatch:club.info.latest_match,
                        nextMatch:club.info.next_match,
                    }}/>
                ))}
            </tbody>
        </table>
    )
}