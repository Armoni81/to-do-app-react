import React from "react";
import { stylesForCounter } from "../../Constants/consts";

const ToDoCounter = ({ checkedStatus }) => {
    const checkedTodos = checkedStatus.filter((todo) => todo.isChecked);

    return (
        <div style={stylesForCounter.counterContainer}>
            <p style={stylesForCounter.counterText}>
                {checkedTodos.length}/{checkedStatus.length}
            </p>
        </div>
    );
};



export default ToDoCounter;
