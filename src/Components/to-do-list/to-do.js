import React, { useState } from 'react';
import { stylesForTodoComponent} from '../../Constants/consts';

import ToDoCounter from '../toDoCounter/toDoCounter';
import Input from '../inputField/inputField';
import RenderToDoITems from '../renderTodoItems/renderToDoItems';

//Parent
const Todo = () => {

    const [input, setInput] = useState('');
    const [arrayOfTodos, setArrayOfTodos] = useState([]);
    const [disable, setDisable] = useState(false);
    const [checkedStatus, setCheckedStatus] = useState({});

    return (
        <div style={stylesForTodoComponent.boxHoldingToDos}>
            <ToDoCounter
                checkedStatus={checkedStatus}
                arrayOfTodos={arrayOfTodos}
            />
            <Input
                setDisable={setDisable}
                disable={disable}
                setArrayOfTodos={setArrayOfTodos}
                input={input}
                arrayOfTodos={arrayOfTodos}
                setInput={setInput}
            />
            <RenderToDoITems
            arrayOfTodos={arrayOfTodos}
            setArrayOfTodos={setArrayOfTodos}
            checkedStatus={checkedStatus}
            setCheckedStatus={setCheckedStatus} 
            />
        </div>
    );
};

export default Todo;
  