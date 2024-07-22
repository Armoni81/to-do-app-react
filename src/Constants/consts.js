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
        backgroundColor: '#4dff4d',
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
        flexDirection: 'column', // Ensures error message is above input field
        alignItems: 'flex-start' // Aligns items to the start
    },
    inputWithButton: {
        display: 'flex',
        flexDirection: 'row', // Align input and plus sign button horizontally
        alignItems: 'center',
        width: '100%' // Make sure it takes the full width
    },
    inputBoxStyling: {
        flex: 1, // Allow input box to take available space
        backgroundColor: '#e4dfdf'
    },
    plusSignStyling: {
        width: '30px',
        paddingLeft: '5px'
    },
    errorMessage: {
        color: 'red',
        marginBottom: '5px', // Add some space between error message and input field
        fontSize: '10px',
        alignSelf: 'flex-start' // Align the error message to the start
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

//Styles for <ToDoCounter /> 

export const stylesForCounter = {
    counterContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        padding: '10px',
        boxSizing: 'border-box',
    },
    counterText: {
        backgroundColor: 'green',
        color: '#4dff4d',
        width: 'fit-content',
        border: '1px solid #4dff4d',
        borderRadius: '10px',
        padding: '10px 20px',
        fontSize: '1rem',
        textAlign: 'center',
    },
};

//Styles for <NoTodos /> 
export const stylesForNoTodos = {
  mainText: {
        display: 'flex', 
        justifyContent: 'center',
        color: '#ece9e9'
    }
}

//Styles end here

// Text Constants start here 
export const placeHolderText = 'Enter todo here...'
export const header = 'To-Do'
export const minimumCharactersForInputField = 'Please use at least 4 characters. You currently have ' 
