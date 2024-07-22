import {React} from "react";

//Child

const ToDoCounter = ({ checkedStatus }) => {

    const checkedTodos =  checkedStatus.filter((todo) => {

        return todo.isChecked !== false // filters out each todo.isChecked if the value is not false include it in the returning arr 

        })

    return(
        <div id="counter" style={{  color: '#4dff4d', width: '100%'}}>
          <p style={{backgroundColor: 'green', width: 'fit-content', border: '1px solid lime',borderRadius: '10px', padding:'20px'}}> {checkedTodos.length + '/' + checkedStatus.length}</p> 
        </div>
    );
}
export default ToDoCounter  