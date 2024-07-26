import{ React, useState, useEffect} from "react";
//imported Constants
import { stylesForTodoComponent, placeHolderText, minimumCharactersForInputField, noSpecialCharacters, specialCharacterRegex } from '../../Constants/consts';
//imported Component(s)
import NoTodos from "../renderNoTodos/noTodos";

//photos
import plusSign from  '../../Images/plus-sign_11607148.png'
import trashCan from '../../Images/trash-can_7279437.png'
import RemoveAllTodo from "../allTodoFunctionality/removeAll";

const Input = ({ setCheckedStatus, checkedStatus }) => {
    const [ loadNoToDo, setLoadNoToDo ] = useState(true)
    const [ errorText, setErrorText ] = useState('')
    const [input, setInput] = useState('');
    const [disable, setDisable] = useState(false);

    const handleSubmitClick = (event) => {
        if( input.split('').length < 4 || !specialCharacterRegex.test(input) ){
            setDisable(true)
            console.log(input.split('').length < 4)
            !specialCharacterRegex.test(input) ? setErrorText(noSpecialCharacters) : setErrorText(minimumCharactersForInputField + input.split('').length) 
            setTimeout(()=> {
             setDisable(false)
            }, '3000')
            return //stop running the function here
        }
        setCheckedStatus([
            ...checkedStatus,
            {title: input, id: self.crypto.randomUUID(), isChecked: false}
        ]
        );
        
        setInput('')
          document.getElementById('inputField').value= ''
       

        setTimeout(() => {
            setDisable(false) // enables sumbit button after 3 seconds
        }, '3000');
    }

    const handleCheckBox = (event) => {
        const { id, checked } = event.target; //grabs id and checked property from event.target 
        
        const updatedItems = checkedStatus.map(item =>
            
          item.id === id ? { ...item, isChecked: checked } : item // checks if the IDs match 
        );
        setCheckedStatus(updatedItems);
      };

     const removeTodo = (index, title) => {
       const updatedItems = checkedStatus.filter((_, i) => i !== index) // i represents the index that filter is at. if index is not equal to the index thats getting deleted return those in a seperate array
        setCheckedStatus(updatedItems)
        
      };

      useEffect(() => {
          checkedStatus.length > 0 ? setLoadNoToDo(false) : setLoadNoToDo(true)

      }, [checkedStatus])

  return (
    <div>
        <div>
            <div style={stylesForTodoComponent.spaceBetweenTodos}>
                <div style={stylesForTodoComponent.inputSectionStyling}>
                    <div style={stylesForTodoComponent.inputWithButton}>
                        <input 
                            id='inputField' 
                            onChange={e => setInput(e.target.value)} 
                            style={stylesForTodoComponent.inputBoxStyling} 
                            placeholder={placeHolderText} 
                            disabled={disable}
                            required
                            type="text"
                            data-cy="inputField"
                        />
                        <input 
                            type='image'
                            src={plusSign} 
                            onClick={handleSubmitClick} 
                            style={stylesForTodoComponent.plusSignStyling} 
                            disabled={disable}
                            data-cy="sumbitButton"
                        />
                    </div>
                    {disable && (
                        <p data-cy='errorText' style={stylesForTodoComponent.errorMessage}>{errorText}.</p>
                    )}
                </div>
            </div>
        </div>
        
        {loadNoToDo ? (<NoTodos /> ) :
            <><div>

                  {checkedStatus.length ? (
                      <div>
                          <RemoveAllTodo setCheckedStatus={setCheckedStatus} checkedStatus={checkedStatus} />
                      </div>

                  ) : null}
              </div><div style={stylesForTodoComponent.todoStyling}>
                      {checkedStatus.map((element, index) => (
                          <div key={element.id} id={'to-do'} style={stylesForTodoComponent.renderedToDos}>
                              <input
                                  data-cy={`checkbox${index}`} // adding index for cypress tests
                                  type='checkbox'
                                  id={element.id}
                                  onChange={handleCheckBox} />
                              <p id={"userInput"}>{element.title}</p>
                              <input
                                  type='image'
                                  style={{ width: '40px' }}
                                  src={trashCan}
                                  data-cy={`removeTodo${index}`} // adding index for cypress tests
                                  alt="Remove"
                                  onClick={() => removeTodo(index, element.title)} />
                          </div>
                      ))}
                  </div></>
            }
    </div>
    )   
}
export default Input
