import React from "react";
import { FormTeamType } from "../FormItem/FormItem";

type MatchResultType = {
    firstTeam:FormTeamType;
    secondTeam:FormTeamType;
}

require("./styles.scss");

export const MatchResult:React.FC<MatchResultType> = (props) => {

    return (
        <>
            <a href="#" className="matchResult">
                <div className="result-teamName">{props.firstTeam.name}</div>
                <div className="result-badge"><img src={"images/"+props.firstTeam.image}/></div>
                <div className="result-score">
                    {props.firstTeam.score}
                    <span className="result-seperator"></span>
                    {props.secondTeam.score}
                </div>
                <div className="result-badge"><img src={"images/"+props.secondTeam.image}/></div>
                <div className="result-teamName">{props.secondTeam.name}</div>
            </a>
        </>
    )
}