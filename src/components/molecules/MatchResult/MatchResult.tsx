import React from "react";
import { FormTeamType } from "../FormItem/FormItem";

type MatchResultType = {
    firstTeam:FormTeamType;
    secondTeam:FormTeamType;
    time?:string;
    shortName?:boolean;
    rightArrow?:boolean;
}

require("./styles.scss");

export const MatchResult:React.FC<MatchResultType> = (props) => {

    return (
        <>
            <a href="#" className={"matchResult" + (props.rightArrow ? " rightArrow" : "")}>
                <div className="result-teamName">{props.shortName ? props.firstTeam.shortName : props.firstTeam.name}</div>
                <div className="result-badge"><img src={"images/"+props.firstTeam.image}/></div>
                <div className="result-score">
                    {props.time ? 
                        <>
                            {props.time}
                        </>
                    : (
                        <>
                            {props.firstTeam.score}
                            <span className="result-seperator"></span>
                            {props.secondTeam.score}
                        </>
                     ) }
                </div> 
                <div className="result-badge"><img src={"images/"+props.secondTeam.image}/></div>
                <div className="result-teamName">{props.shortName ? props.secondTeam.shortName : props.secondTeam.name}</div>
                
                {props.rightArrow ? (
                    <>
                        <div className="result-rightArrow">
                            &#x2192;
                        </div>
                    </>
                ) : null}
            </a>
        </>
    )
}