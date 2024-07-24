import React from "react"
import Todo from "../../src/Components/to-do-list/to-do"
import App from "../../src/App"

import { noTodoContent, minimumCharactersForInputField, header } from "../../src/Constants/consts"

const appComponent = <App />

beforeEach(() => {
  cy.mount(<App />); // Ensure a fresh component instance before each test
});

describe('<App /> Successfully mounts', () => {
  it('Checks for successfully  rendered  page',()=> {
    cy.contains(header)
    cy.get('[data-cy=counter]').contains('0/0')
    cy.contains(noTodoContent)

  })
}
)

describe('Todos: Successfully add and remove a todo ', () =>  {

  beforeEach(() => {
    cy.get('[data-cy=inputField]').click().type("hello world")
    cy.get('[data-cy=sumbitButton]').click()

  })

  it('Successfuly add todo after typing at least 4 characters',() => {
    cy.contains('hello world') // Success
  })

  it('Delete hello world todo', () => {
    cy.contains('hello world')
    cy.get('[data-cy=removeTodo0]').click()
    cy.contains(noTodoContent)
  })
})

describe('Error Handling: Minimum Characters', () => {
  beforeEach(() => {
    cy.get('[data-cy=inputField]').click().type("123")
    cy.get('[data-cy=sumbitButton]').click()
  })
  it('Display error text when less than 4 characters entered and submit button click', () => {
    cy.contains(minimumCharactersForInputField)

  })
  it('Error text removed after should no longer appear after adding correct amount of characters', () => {
    cy.get('[data-cy=inputField]').click().type("4")
    cy.get('[data-cy=sumbitButton]').click()
    cy.contains('1234')
  })
  
})

describe('Checkboxes: Handling count', () => {
  beforeEach(() => {
    cy.get('[data-cy=inputField]').click().type("Random Todo")
    cy.get('[data-cy=sumbitButton]').click()
  })

  it('Checkbox and increment count by 1 then decrement count by 1', () => {
    cy.get('[data-cy=checkbox0]').click()
    cy.get('[data-cy=counter]').contains('1/1')
    cy.get('[data-cy=checkbox0]').click()
    cy.get('[data-cy=counter]').contains('0/1')
  })
  it('Checked todo is deleted should decrement by 1',() => {
    cy.get('[data-cy=checkbox0]').click()
    cy.get('[data-cy=removeTodo0]').click()
    cy.get('[data-cy=counter]').contains('0/0')
  })

})

describe('Multi Todo Functionality', () => {
  beforeEach('',() => {
    // Adds 5 Todos
    cy.get('[data-cy=inputField]').click().type("Random Todo")
    cy.get('[data-cy=sumbitButton]').click()
    cy.get('[data-cy=inputField]').click().type("Random Todo 2")
    cy.get('[data-cy=sumbitButton]').click()
    cy.get('[data-cy=inputField]').click().type("Random Todo 3")
    cy.get('[data-cy=sumbitButton]').click()
    cy.get('[data-cy=inputField]').click().type("Random Todo 4")
    cy.get('[data-cy=sumbitButton]').click()
    cy.get('[data-cy=inputField]').click().type("Random Todo 5")
    cy.get('[data-cy=sumbitButton]').click()
  })
  it('Check count should be 0/5', () => {
    cy.get('[data-cy=counter]').should('contain', '0/5')
  })

  it('Removes Random Todo 3 and checks Random Todo 5 count should be 1/4', () => {
    cy.get('[data-cy=checkbox2]').click()
    cy.get('[data-cy=removeTodo2]').click()
    cy.get('[data-cy=checkbox3]').click()
    cy.get('[data-cy=counter]').should('contain', '1/4')
  })
})
