import React from "react";
//imported Constants
import { stylesForCounter } from "../../Constants/consts";

const ToDoCounter = ({ checkedStatus }) => {
    const checkedTodos = checkedStatus.filter((todo) => todo.isChecked);

    return (
        <div style={stylesForCounter.counterContainer}>
            < p data-cy='counter'style={stylesForCounter.counterText}>
                {checkedTodos.length}/{checkedStatus.length}
            </p>
        </div>
    );
};



export default ToDoCounter;
