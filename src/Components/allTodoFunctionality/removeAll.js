import React from "react";

const RemoveAllTodo = ({ setCheckedStatus, checkedStatus }) => {
    
    return( 
        <div>
            <button onClick={checkedStatus.length >= 2 ? () => setCheckedStatus([]) : null}>Remove All</button>
        </div>
    )
}

export default RemoveAllTodo
