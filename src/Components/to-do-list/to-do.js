import React, { useState } from 'react';
import { stylesForTodoComponent} from '../../Constants/consts';

import ToDoCounter from '../toDoCounter/toDoCounter';
import Input from '../inputField/inputField';
import Header from '../header/header';

//Parent
const Todo = () => {
    const [checkedStatus, setCheckedStatus] = useState([]);
    
    return (
    <div>
            <Header />
        <div style={stylesForTodoComponent.boxHoldingToDos}>
            <ToDoCounter
                checkedStatus={checkedStatus}
            />
            <Input
                setCheckedStatus={setCheckedStatus}
                checkedStatus={checkedStatus}
            />
        </div>
    </div>
    );
};

export default Todo;
  