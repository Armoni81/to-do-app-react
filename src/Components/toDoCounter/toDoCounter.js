import {React} from "react";

const ToDoCounter = ({ checkedStatus, arrayOfTodos }) => {
console.log(checkedStatus, 'todocounter')
const grabCompletedTasks = (checkedStatus)=> {
   let count = 0
   const totalTasks = Object.values(checkedStatus).length
   Object.values(checkedStatus).map( task => {
    if(task === true){
        count++
    }
    if(task === false){
        count -1
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