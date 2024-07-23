import React from "react"
import Todo from "../../src/Components/to-do-list/to-do"
import App from "../../src/App"

import { placeHolderText, noTodoContent } from "../../src/Constants/consts"

const appComponent = <App />

describe('<App /> Boiler Plate tests', () => {
  it('mounts', () => {
    cy.mount(appComponent)
  })
  it('Successfuly add todo after typing at least 4 characters',() => {
    cy.mount(appComponent)
    cy.get('[data-cy=inputField]').click().type("hello world")
    cy.get('[data-cy=sumbitButton]').click()
    cy.contains('hello world')
  })
  it('Delete hello world todo', () => {
    cy.mount(appComponent)
    cy.get('[data-cy=inputField]').click().type("hello world")
    cy.get('[data-cy=sumbitButton]').click()
    cy.contains('hello world')
    cy.get('[data-cy=removeTodo]').click()
    cy.contains(noTodoContent)
  })

})