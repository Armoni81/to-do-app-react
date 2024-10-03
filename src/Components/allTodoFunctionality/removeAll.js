import React from "react";

import trashCan from '../../Images/trash-can_7279437.png'

const RemoveAllTodo = ({ setCheckedStatus, checkedStatus }) => {
    
    return( 
        <div>
            <input 
            type="image" 
            onClick={checkedStatus.length >= 2 ? () => setCheckedStatus([]) : null}
            src={trashCan}
            style={{width: '40px'}}
            />
        </div>
        
    )
}

export default RemoveAllTodo
