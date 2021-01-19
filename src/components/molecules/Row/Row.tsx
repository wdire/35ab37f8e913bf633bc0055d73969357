import React from "react";

type RowInfoType = {
    position:number,
    teamName:string;
    played:number;
    won:number;
    drawn:number;
    lost:number;
    gf:number;
    ga:number;
    gd:number;
    points:number;
    //form:formInfoType[];
}

type formInfoType = {
    
}

export const Row:React.FC<RowInfoType> = (info) => {

    return (
        <tr>
            <td>\/</td>
            <td></td>
        </tr>
    )
}