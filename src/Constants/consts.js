// Styles Start here

//Styles for <Input /> 
export const stylesForTodoComponent = {
    boxHoldingToDos : {
        margin: '100px',
        display: 'flex',
        flexDirection: 'column',
    },
    renderedToDos : {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        border: '3px groove black',
        backgroundColor: '#ece9e9',
        borderRadius: '20px',
        justifyContent: 'space-between',
        padding: '10px',
        margin: '10px'
    },
    spaceBetweenTodos: { 
        padding: '20px',
        display: 'flex',
        gap: '10px',
        flexDirection: 'column-reverse'
    },
    inputSectionStyling:{
        display: 'flex',
        justifyContent: 'center'
    },
    inputBoxStyling: {
        width: '70%',
        backgroundColor: '#e4dfdf'
    },
    todoStyling: {
        display: 'flex',
        flexFlow: 'column-reverse'
    }
    
}
//Styles for <Header />
export const stylesForHeader = {
    header: {
        fontSize:'30px',
        padding:'30px',
        color: '#4dff4d'
    }
}

//Styles end here

// Text Constants start here 
export const placeHolderText = 'Enter todo here...'
export const header = 'To-Do'
