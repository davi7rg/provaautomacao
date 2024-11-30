//Arquivo responsavel pela geracao de usuarios randomicos para serem utilizados de massas de testes

<reference types="cypress" />

const { fakerEN_US: faker } = require('@faker-js/faker')

function generateDataUser () {
  const user = {
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    password: 'Jerusalem',
    title: faker.helpers.arrayElement(['Mr.', 'Mrs.']),
    birth_day: faker.number.int({ min: 1, max: 25 }).toString(),
    birth_month: faker.date.month(),
    birth_year: faker.number.int({ min: 1965, max: 2006 }).toString(),
    company: faker.company.name(),
    address: faker.location.streetAddress(true),
    country: 'Israel',
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    mobile_number: faker.phone.number(),
    comment: faker.lorem.sentence(),
    cc_number: faker.finance.creditCardNumber(),
    cc_cvc: faker.finance.creditCardCVV(),
    cc_month: '07',
    cc_year: faker.date.future({ years: 2 }).getFullYear()
  }

  return cy.wrap(user)
}

Cypress.Commands.add('generateDataUser', generateDataUser)

function generateDataMessage () {
  const message = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    subject: faker.lorem.sentence({ min: 3, max: 5 }),
    message: faker.lorem.paragraph()
  }

  return cy.wrap(message)
}

Cypress.Commands.add('generateDataMessage', generateDataMessage)
