import React from "react";
import { Row } from "../../molecules/Row/Row";

require("./styles.scss");

import exampleData, { exampleDataType } from "./../../../API/getExampleData";

export const Table:React.FC<{}> = (info) => {

    console.log(exampleData);

    return (
        <table>
            
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