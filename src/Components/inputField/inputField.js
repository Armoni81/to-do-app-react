import{ React,  useCallback, useEffect} from "react";
//imported Constants
import { stylesForTodoComponent, placeHolderText } from '../../Constants/consts';

import NoTodos from "../renderNoTodos/noTodos";


//photos
import plusSign from  '../../Images/plus-sign_11607148.png'
import trashCan from '../../Images/trash-can_7279437.png'



const Input = ({ input, setInput, disable, setDisable, setCheckedStatus, checkedStatus, loadNoToDo, setLoadNoToDo }) => {

    const handleSubmitClick = (event) => {
        
        if( input.split('').length < 4 ){
    
            setDisable(true)
            setTimeout(()=> {
             setDisable(false)
            }, '3000')
            return //stop running the function here if true 
        
        }else{
            setDisable(false)
        }
        setCheckedStatus([
            ...checkedStatus,
            {title: input, id: self.crypto.randomUUID(), isChecked: false}
        ]
        );
        
        // setDisable(true) // disables submit button
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
        <div style={stylesForTodoComponent.spaceBetweenTodos}>
            <div style={stylesForTodoComponent.inputSectionStyling}>
                <input 
                    id='inputField' 
                    onChange={e => setInput(e.target.value)} 
                    style={stylesForTodoComponent.inputBoxStyling} 
                    placeholder={placeHolderText} 
                    disabled={disable}
                    required
                    type="text"
                />
            <div>
                
                <input 
                    type='image'
                    src={plusSign} 
                    onClick={handleSubmitClick} 
                    style={{ width: '30px', paddingLeft: '5px' }} 
                    disabled={disable}
                />
            </div>
            </div>
        </div>
        <div>
            {disable ?   (
                <p style={{color:'red'}}>Please use more than 4 characters. You currently have {input.split('').length}.</p>

            ): null

            }
        </div>
            {loadNoToDo ? (<NoTodos /> 

            ) :
         
        <div style={stylesForTodoComponent.todoStyling}>
        {checkedStatus.map((element, index) => (
            <div key={element.id}  id={'to-do'} style={stylesForTodoComponent.renderedToDos}>
                <input
                    
                    type='checkbox'
                    id={element.id}
                    onChange={handleCheckBox}
                />
                <p id={"userInput"}>{element.title}</p>
                <input
                    type='image'
                    style={{ width: '40px' }}
                    src={trashCan}
                    alt="Remove"
                    onClick={() => removeTodo(index,element.title)}
                />

        </div>
        ))}
        </div>
}
    </div>
)
}

export default Input
