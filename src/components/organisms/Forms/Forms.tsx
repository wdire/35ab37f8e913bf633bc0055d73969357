import React from "react";
import { FormItem, FormType } from "../../molecules/FormItem/FormItem";

type FormsType = {
    forms:FormType[];
}

require("./styles.scss");

export const Forms:React.FC<FormsType> = (props) => {

    return (
        <>
            <div className="forms">
                {props.forms.map((form, index)=>{
                    return(
                        <FormItem key={index} form={form}/>
                    )
                })}
            </div>
        </>
    )
}