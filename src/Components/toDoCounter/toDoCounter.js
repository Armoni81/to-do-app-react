import {React} from "react";

//Child

const ToDoCounter = ({ checkedStatus }) => {

    const checkedTodos =  checkedStatus.filter((todo) => {

        return todo.isChecked !== false // filters out each todo.isChecked if the value is not false include it in the returning arr 

        })

    return(
        <div>
            {checkedTodos.length + '/' + checkedStatus.length}
        </div>
    );
}
export default ToDoCounter  