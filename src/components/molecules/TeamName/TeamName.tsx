import React from "react";

type TeamNameType = {
    teamName:string;
    image:string;
}

export const TeamName:React.FC<TeamNameType> = (props) => {

    return (
        <a href="#">
            <span className="team-name_image">
                <img src={props.image}/>
            </span>
            <span className="team-name_name">
                {props.teamName}
            </span>
        </a>
    )
}