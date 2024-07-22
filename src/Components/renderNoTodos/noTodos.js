import React from "react";
import { stylesForNoTodos } from "../../Constants/consts";

const NoTodos = () => {


    return (
        <div style={stylesForNoTodos.mainText}>
           <p id={'no-to-do'}> Well look at you, with nothing to do...</p>
        </div>
    )
}

export default NoTodos;