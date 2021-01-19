import React from "react";
import { FormItem, FormTeamType, FormType } from "../../molecules/FormItem/FormItem";
import { MatchResult } from "../MatchResult/MatchResult";

type ExpandRowType = {
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
    expanderId:number;
    expanded:boolean;
}

require("./styles.scss");

export const ExpandRow:React.FC<ExpandRowType> = (props) => {

    return (
        <tr className={"expandable-row" + (props.expanded ? " expanded" : "")}>
           <td colSpan={13}>
               <div className="expandableRow-wrapper">
                   <a href="#" className="expanded-team-link">
                       <span className="expanded-team-image">
                           <img src={"images/"+props.latestMatch.this_team.image}/>
                       </span>
                       <span className="expanded-team-name">
                           {props.latestMatch.this_team.name}
                       </span>
                   </a>
                   <div className="expanded-rightside">
                       <div className="expanded-match-result">
                           <div className="expanded-recent-result_date">Recent Result - {props.latestMatch.date}</div>
                           <div className="expanded-result">
                                <MatchResult shortName rightArrow firstTeam={props.latestMatch.other_team} secondTeam={props.latestMatch.this_team} />
                           </div>
                       </div>
                       <div className="expanded-match-result">
                           <div className="expanded-recent-result_date">Next Fixture - {props.nextMatch.date}</div>
                           <div className="expanded-result">
                                <MatchResult time={props.nextMatch.time} shortName rightArrow firstTeam={props.nextMatch.other_team} secondTeam={props.nextMatch.this_team} />
                           </div>
                       </div>
                       <a className="expanded-button" href="#">
                           <span className="expanded-button_text">
                            <span>Visit Club Page</span>
                            <span>&nbsp;&nbsp;&#x2192;</span>
                           </span>
                       </a>
                   </div>
               </div>
           </td>
        </tr>
    )
}