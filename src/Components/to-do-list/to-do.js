import { React, useEffect, useState,useMemo, useCallback} from 'react';
import { stylesForTodoComponent, placeHolderText,maxAmountOfTodos } from '../../Constants/consts';
import ToDoCounter from '../toDoCounter/toDoCounter';
import checkBox from '../../Images/check_5610944.png'
import plusSign from  '../../Images/plus-sign_11607148.png'
import trashCan from '../../Images/trash-can_7279437.png'
  
  const Todo = () =>  {
    const [ input , setInput ] = useState('')
    const [ arrayOfTodos,setArrayOfTodos ] = useState([])
    const [ disable, setDisable ] = useState(false)
    const  [ checkedStatus ,setCheckedStatus ] = useState({})

    const handleSubmitClick = () => {
        setArrayOfTodos([...arrayOfTodos, [input]]) // adds new input to arrayOftodos

        //   setDisable(true) // disables submit button
        document.getElementById('inputField').value= '' // clears input field once submit button is clicked back to placeholder text

        // setTimeout(() => {
        //     setDisable(false) // enables sumbit button after 3 seconds
        // }, '3000');
    }

   
const handleCheckBox = (event,index)=> {
   setCheckedStatus({
    checkedStatus,
    [index]: event.target.checked
   })
//    console.log(checkedStatus, 'checkedStatus')
}
const removeTodo = useCallback((index,checkedStatus,event) => {
    setArrayOfTodos(prevArray => { // takes the value of arrayOfTodos
      const newArray = [...prevArray]; //  uses spread opertor to take in any new values added 
      if (index > -1) {
        newArray.splice(index, 1);
        console.log(checkedStatus[index],index, 'here is index')
        // if(checkedStatus[index] === true){
        //   setCheckedStatus({...checkedStatus,
        //     [index]: false,
        //   })

        // if i come through and click on element 1 and element 2 bother are true 
        //i delete element 1 and element 2 drops and index 
          let checkedTodo = document.getElementById(`checkBox${index}`)
          checkedTodo.checked = false
          console.log(document.getElementById(`checkBox${index}`))
            console.log(checkedStatus[index], 'checledStatus[index] in the IF!')
        // }
        // if index that comes in is true from checkedStatus set it to false and take away 1 from count 
      }
      return newArray;
    });
  }, [arrayOfTodos]); //only runs if this is changed
console.log(checkedStatus, 'checkedStatus')
console.log(arrayOfTodos,'arrof toods')
return (
        <div  style={stylesForTodoComponent.boxHoldingToDos}> 
        <ToDoCounter
            checkedStatus={checkedStatus}
            arrayOfTodos={arrayOfTodos}
        />
        <div style={stylesForTodoComponent.inputSectionStyling}>
            <input id='inputField' onChange={e => setInput(e.target.value)}style={stylesForTodoComponent.inputBoxStyling} placeholder={placeHolderText} minLength={3} required={true}></input>
            <input type='image'src={plusSign} onClick={handleSubmitClick} style={{width: '30px', padding: '5px'}} disabled={disable}></input>
        </div>
        <div style={stylesForTodoComponent.spaceBetweenTodos}>
            {
                arrayOfTodos.map((element, index) => ( // loops through arrayOfTodos and displays each element in that array
                    <div key={index} style={stylesForTodoComponent.renderedToDos}>
                      <input type='checkbox' id={`checkBox${index}`} onChange={() => handleCheckBox(event, index)}></input>  
                      {checkedStatus[index] ? <s>{element}</s> : <p>{element}</p> }
                      <input type='image' onClick={() => removeTodo(index, checkedStatus, event)} style={{width:'40px'}} src={trashCan}></input>
                    </div>
                ))
            }
        </div>
	 </div>
	);
  }

  export default Todo;
  