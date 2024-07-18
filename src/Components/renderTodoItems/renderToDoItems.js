import React from "react";
import { useCallback } from "react";
import { stylesForTodoComponent } from "../../Constants/consts";
import trashCan from  '../../Images/trash-can_7279437.png'

//Child 
const RenderToDoITems = ({ arrayOfTodos, checkedStatus, setCheckedStatus, setArrayOfTodos }) => {

    const handleCheckBox = (event, index) => {
        setCheckedStatus({
            ...checkedStatus,
            [index]: event.target.checked
        });
    };

    const removeTodo = useCallback((index) => {
        setArrayOfTodos(prevArray => {
            const newArray = [...prevArray];
            if (index > -1) {
                newArray.splice(index, 1);
            }
            return newArray;
        });
    }, [arrayOfTodos]);


    return(
        <div style={stylesForTodoComponent.spaceBetweenTodos}>
        {
            arrayOfTodos.map((element, index) => (
                <div key={index} style={stylesForTodoComponent.renderedToDos}>
                    <input type='checkbox' id='checkBox' onChange={(event) => handleCheckBox(event, index)} />
                    {checkedStatus[index] ? <s>{element}</s> : <p>{element}</p>}
                    <input type='image' onClick={() => removeTodo(index)} style={{ width: '40px' }} src={trashCan} alt="Remove" />
                </div>
            ))
        }
    </div>
    )
}

export default RenderToDoITems