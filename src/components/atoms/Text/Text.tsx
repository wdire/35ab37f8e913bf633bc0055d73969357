import React from "react";

type TextType = {
    size?:string;
    bold?:boolean;
    italic?:boolean;
    children:string;
}

enum TextSizeEnum {
    H1="h1",
    H2="h2",
    H3="h3",
    H4="h4",
    H5="h5",
    H6="h6"
}

require("./styles.scss");

export const Text:React.FC<TextType> = (info) => {

    return (
        <>
            <div 
                className={
                    "text" + 
                    (info.bold ? " text-bold" : "") + 
                    (info.italic ? " text-italic" : "") + 
                    (info.size ? 
                        [
                            Object.values(TextSizeEnum).includes(info.size as TextSizeEnum) ? " text-" + info.size.toLowerCase() : ""
                        ] 
                    : "")
                }
            >
                {info.children}
            </div>
        </>
    )
}