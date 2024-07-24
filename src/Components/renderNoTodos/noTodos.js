import React from "react";
//imported Constants
import { stylesForNoTodos, noTodoContent } from "../../Constants/consts";

const NoTodos = () => {


    return (
        <div style={stylesForNoTodos.mainText}>
           <p id={'no-to-do'}>{noTodoContent}</p>
        </div>
    )
}

export default NoTodos;