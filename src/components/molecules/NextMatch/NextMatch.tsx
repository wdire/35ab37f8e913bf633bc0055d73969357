import React from "react";
import { FormTeamType } from "../FormItem/FormItem";
import { MatchResult } from "../MatchResult/MatchResult";

type NextMatchType = {
    nextMatch: {
        this_team:FormTeamType,
        other_team:FormTeamType,
        date:string,
        time:string
    };
}

require("./styles.scss");

export const NextMatch:React.FC<NextMatchType> = (props) => {

    return (
        <>
            <div className="nextMatch">
                <span className="nextMatch-image"><img src={"images/"+props.nextMatch.other_team.image}/></span>
                <span className="nextMatch-tooltip">
                    <span className="nextMatch-date">{props.nextMatch.date}</span>
                    <MatchResult firstTeam={props.nextMatch.this_team} secondTeam={props.nextMatch.other_team} time={props.nextMatch.time} shortName/>
                </span>
            </div>
        </>
    )
}