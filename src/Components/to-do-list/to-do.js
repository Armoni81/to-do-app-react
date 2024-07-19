import React, { useState } from 'react';
import { stylesForTodoComponent} from '../../Constants/consts';

import ToDoCounter from '../toDoCounter/toDoCounter';
import Input from '../inputField/inputField';
import Header from '../header/header';

//Parent
const Todo = () => {

    const [input, setInput] = useState('');
    const [disable, setDisable] = useState(false);
    const [checkedStatus, setCheckedStatus] = useState([]);

    return (
        <div>
            <Header />
        <div style={stylesForTodoComponent.boxHoldingToDos}>
            <ToDoCounter
                checkedStatus={checkedStatus}
            />
            <Input
                setDisable={setDisable}
                disable={disable}
                input={input}
                setInput={setInput}
                setCheckedStatus={setCheckedStatus}
                checkedStatus={checkedStatus}
            />
        </div>
    </div>
    );
};

export default Todo;
  