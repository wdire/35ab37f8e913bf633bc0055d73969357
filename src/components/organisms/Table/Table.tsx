import React, { useState } from "react";
import { TableHeader } from "../../atoms/TableHeader/TableHeader";
import { ExpandRow } from "../../molecules/ExpandRow/ExpandRow";
import { Row } from "../../molecules/Row/Row";

require("./styles.scss");

import exampleData, { exampleDataType } from "./../../../API/getExampleData";

export const Table:React.FC<{}> = (info) => {

    const [expandedRows, setExpandedRows] = useState<number[]>([]);

    const COLUMNS = [
        "More", "Position", "Club", "Played", "Won", "Drawn", "Lost", "GF", "GA", "GD", "Points", "Form", "Next"
    ];

    const addToExpandedRows = (id:number) => {
        setExpandedRows([...expandedRows, id]);
    }

    const removeFromExpandedRows = (id:number) => {
        let newExpandedRows = expandedRows.filter((e:number)=>{
            if(e !== id){
                return e;
            }
            return;
        });

        setExpandedRows(newExpandedRows);
    }

    console.log(expandedRows);

    return (
        <table>
            <thead>
                <tr>
                    {COLUMNS.map((column, index)=>{
                        if(column === "Club"){
                            return(
                                <TableHeader key={index+"_h"} position="left" paddingLeft={20}>{column}</TableHeader>
                            )
                        }else if(column === "Form"){
                            return(
                                <TableHeader key={index+"_h"} shrink>{column}</TableHeader>
                            )
                        }
                        return(
                            <TableHeader key={index+"_h"}>{column}</TableHeader>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {exampleData.map((club:exampleDataType,index:number)=>{

                    return(
                        <React.Fragment key={index+"_c"}>
                            <Row 
                                key={index+"_r"} 
                                info={{
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
                                }}
                                expanderId={index}
                                expandRow={addToExpandedRows}
                                closeRow={removeFromExpandedRows}
                            />
                            <ExpandRow key={index+"_e"} latestMatch={club.info.latest_match} nextMatch={club.info.next_match} expanderId={index} expanded={expandedRows.includes(index)}/>
                        </React.Fragment>
                    )
                })}

                
            </tbody>
        </table>
    )
}