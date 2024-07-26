import React from "react";

const RemoveAllTodo = ({ setCheckedStatus }) => {
    // console.log(checkedStatus)
    const removeList = () => {
        setCheckedStatus([])
    }

    return( 
        <div>
            <button onClick={removeList}>Remove All</button>
        </div>
    )
}

export default RemoveAllTodo

