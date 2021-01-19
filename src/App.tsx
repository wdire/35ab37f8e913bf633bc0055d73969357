import React, { useEffect, useState } from "react";

require("./components/_settings/_base.scss");

import {Title} from "./components/atoms/Title/Title";
import { Main } from "./components/templates/Main/Main";

export const App:React.FC = () => {

    return (
        <Main>
            <Title>Premier League - Tables</Title>
        </Main>
    )
}