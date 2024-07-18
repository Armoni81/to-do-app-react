import {React} from "react";

//Child

const ToDoCounter = ({ checkedStatus, arrayOfTodos }) => {

const grabCompletedTasks = (checkedStatus)=> {
   let count = 0
   Object.values(checkedStatus).map( task => {
    if(task === true){
        count++
    }
    if(task === false){
        count--
    }
})
return count
}

const checkedTasks = grabCompletedTasks(checkedStatus)

    return(
        <div>
            {checkedTasks +'/'+ arrayOfTodos.length}
        </div>
    );
}
export default ToDoCounter  