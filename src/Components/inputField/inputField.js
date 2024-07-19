import{ React,  useCallback} from "react";
//imported Constants
import { stylesForTodoComponent, placeHolderText } from '../../Constants/consts';


//photos
import plusSign from  '../../Images/plus-sign_11607148.png'
import trashCan from '../../Images/trash-can_7279437.png'



const Input = ({ input, setInput, disable, setDisable, setCheckedStatus, checkedStatus }) => {
    const handleSubmitClick = (event) => {
        setCheckedStatus([
            ...checkedStatus,
            {title: input, id: self.crypto.randomUUID(), isChecked: false}
        ]
        );
    
        setDisable(true) // disables submit button
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


  return (
    <div>
        <div style={stylesForTodoComponent.spaceBetweenTodos}>
            <div style={stylesForTodoComponent.inputSectionStyling}>
                <input 
                    id='inputField' 
                    onChange={e => setInput(e.target.value)} 
                    style={stylesForTodoComponent.inputBoxStyling} 
                    placeholder={placeHolderText} 
                    minLength={3} 
                    required={true}
                />
                <input 
                    type='image'
                    src={plusSign} 
                    onClick={handleSubmitClick} 
                    style={{ width: '30px', padding: '5px' }} 
                    disabled={disable}
                />
            </div>
        </div>
        <div style={stylesForTodoComponent.todoStyling}>
        {checkedStatus.map((element, index) => (
            <div key={element.id} style={stylesForTodoComponent.renderedToDos}>
                <input
              
                    type='checkbox'
                    id={element.id}
                    onChange={handleCheckBox}
                />
                <p>{element.title}</p>
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
    </div>
)
}

export default Input
