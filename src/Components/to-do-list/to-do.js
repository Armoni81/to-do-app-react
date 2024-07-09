import { React, useEffect, useState,useMemo, useCallback} from 'react';
import { stylesForTodoComponent, placeHolderText,maxAmountOfTodos } from '../../Constants/consts';
import checkBox from '../../Images/check_5610944.png'
import plusSign from  '../../Images/plus-sign_11607148.png'
import trashCan from '../../Images/trash-can_7279437.png'
  
  const Todo = () =>  {
    const [ input , setInput ] = useState('')
    const [ arrayOfTodos,setArrayOfTodos ] = useState([])
    const [ disable, setDisable ] = useState(false)
    const  [ isChecked,setIsChecked ] = useState(false)

    const handleSubmitClick = () => {
        setArrayOfTodos([...arrayOfTodos, [input]]) // adds new input to arrayOftodos

        setDisable(true) // disables submit button
        document.getElementById('inputField').value= '' // clears input field once submit button is clicked back to placeholder text

        setTimeout(() => {
            setDisable(false) // enables sumbit button after 3 seconds
        }, '3000');
    }

    const removeTodo = useCallback((index) => {
        setArrayOfTodos(prevArray => { // takes the value of arrayOfTodos
          const newArray = [...prevArray]; //  uses spread opertor to take in any new values added 
          if (index > -1) {
            newArray.splice(index, 1); 
          }
          return newArray;
        });
      }, [arrayOfTodos]); //only runs if this is changed
const handleCheckBox = (event)=> {
    if(event.target.checked){
        setIsChecked(true) // BUG:updates all; checkboxes at once
    }else{
        setIsChecked(false)
    }
}
	return (
    <div  style={stylesForTodoComponent.boxHoldingToDos}> 
        <div style={stylesForTodoComponent.inputSectionStyling}>
            <input id='inputField' onChange={e => setInput(e.target.value)}style={stylesForTodoComponent.inputBoxStyling} placeholder={placeHolderText} minLength={3} required={true}></input>
            <input type='image'src={plusSign} onClick={handleSubmitClick} style={{width: '30px', padding: '5px'}} disabled={disable}></input>
        </div>
        <div style={stylesForTodoComponent.spaceBetweenTodos}>
            {
                arrayOfTodos.map((element, index) => ( // loops through arrayOfTodos and displays each element in that array
                    <div key={index} style={stylesForTodoComponent.renderedToDos}>
                      <input type='checkbox' id='checkBox' onChange={() => handleCheckBox(event)}></input>  
                      {isChecked ?<s style={{color: 'green'}}>{element}</s> : <p>{element}</p> }
                      <input type='image' onClick={() => removeTodo(index)} style={{width:'40px'}} src={trashCan}></input>
                    </div>
                ))
            }
        </div>
	 </div>
	);
  }

  export default Todo;
  