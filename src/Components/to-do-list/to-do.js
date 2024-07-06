import { React, useState } from 'react';
import { stylesForTodoComponent, placeHolderText } from '../../Constants/consts';
import checkBox from '../../Images/check_5610944.png'
import plusSign from  '../../Images/plus-sign_11607148.png'
import trashCan from '../../Images/trash-can_7279437.png'
  
  const Todo = () =>  {
    const [ input , setInput ]= useState('')
    const [ arrayOfTodos,setArrayOfTodos ] = useState([])
    const [ disable, setDisable ] =useState(false)

    const handleSubmitClick = () => {

        if(arrayOfTodos[arrayOfTodos.length -1] === arrayOfTodos[arrayOfTodos.length -2]){
            console.log(arrayOfTodos[arrayOfTodos.length],'equals',arrayOfTodos[arrayOfTodos.length -1])
        }
        setArrayOfTodos([...arrayOfTodos, [input]]) // adds new input to arrayOftodos
console.log(arrayOfTodos[arrayOfTodos.length], 'length')
        setDisable(true) // disables submit button
        document.getElementById('inputField').value= '' // clears input field once submit button is clicked back to placeholder text
        // setArrayOfTodos([])
        setTimeout(() => {
            setDisable(false) // enables sumbit button after 3 seconds
        }, '3000');
    }
    const removeTodo = (event) => {
        console.log(event)
    }
    console.log(input,'here')
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
                        <p>{element}</p><input type='image' onClick={removeTodo} style={{width:'40px'}} src={trashCan}></input>
                    </div>
                ))
            }
        </div>
	 </div>
	);
  }

  export default Todo;
  