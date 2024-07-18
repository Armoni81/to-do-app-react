import React from "react";
//imported Constants
import { stylesForTodoComponent, placeHolderText } from '../../Constants/consts';

//photos
import plusSign from  '../../Images/plus-sign_11607148.png'


const Input = ({ arrayOfTodos, input, setArrayOfTodos, setInput, disable }) => {
    const handleSubmitClick = () => {
        setArrayOfTodos([...arrayOfTodos, [input]]) // adds new input to arrayOftodos
    
        // setDisable(true) // disables submit button
          document.getElementById('inputField').value= ''
       
    
        // setTimeout(() => {
        //     setDisable(false) // enables sumbit button after 3 seconds
        // }, '3000');
    }
  

    return (
        <div style={stylesForTodoComponent.inputSectionStyling}>
            <input id='inputField' onChange={e => setInput(e.target.value)} style={stylesForTodoComponent.inputBoxStyling} placeholder={placeHolderText} minLength={3} required={true}></input>
            <input type='image'src={plusSign} onClick={handleSubmitClick} style={{width: '30px', padding: '5px'}} disabled={disable}></input>
        </div>
    )
}

export default Input;