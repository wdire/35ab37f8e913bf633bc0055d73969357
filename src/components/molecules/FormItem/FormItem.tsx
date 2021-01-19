import React from "react";
import { MatchResult } from "../MatchResult/MatchResult";

export enum FormStatus {
    WIN=1,
    LOST=2,
    DRAWN=3
}

export type FormType = {
    status: FormStatus;
    date: string;
    first_team: FormTeamType;
    second_team: FormTeamType;
}

export type FormTeamType = {
    shortName:string;
    name:string;
    image:string;
    score?:number;
}

export type FormItemType = {
    form:FormType;
}

require("./styles.scss");

export const FormItem:React.FC<FormItemType> = (props) => {

    let statusText = (props.form.status === FormStatus.WIN ? "Win" : (
        props.form.status === FormStatus.LOST ? "Lost" : (
            props.form.status === FormStatus.DRAWN ? "Drawn" : ""
        )
    ));

    return (
        <>
            <div className={"form-item " + statusText.toLowerCase()}>
                <span>{statusText[0]}</span>
                <span className="form-item-tooltip">
                    <div className="form-item_date"><b>{statusText}</b>{" - " + props.form.date}</div>
                    <MatchResult firstTeam={props.form.first_team} secondTeam={props.form.second_team}/>
                </span>
            </div>
        </>
    )
}