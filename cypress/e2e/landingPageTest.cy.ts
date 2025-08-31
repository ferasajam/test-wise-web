

describe('Test Button Jetzt kostenloses Erstgespräch buchen', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('h1').contains('Wir testen für Sie')
    cy.contains('button', 'Jetzt kostenloses Erstgespräch buchen').click()
    cy.url().should('include', '/contact')
  })
})


describe('Test Button Alle Leistungen ansehen', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('h1').contains('Wir testen für Sie')
    cy.contains('button', 'Alle Leistungen ansehen').click()
    cy.url().should('include', '/services')
  })
})


describe('Test Button Kostenloses Erstgespräch', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('h1').contains('Wir testen für Sie')
    cy.contains('button', 'Kostenloses Erstgespräch').click()
    cy.url().should('include', '/contact')
  })
})

describe('Test Button Leistungen entdecken', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('h1').contains('Wir testen für Sie')
    cy.contains('button', 'Leistungen entdecken').click()
    cy.url().should('include', '/services')
  })
})