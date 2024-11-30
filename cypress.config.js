//Arquivo responsavel pela config de acesso do site que vai ser usado para a automacao deste exercicio e montagem de relatorio de execucao

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
    },
    env: {
      foo: 'bar',
      baz: 'quux'
    },
    baseUrl: 'https://automationexercise.com',
    viewportWidth: 1366,
    viewportHeight: 768,
    screenshotsFolder: 'cypress/reports/screenshots',
    videosFolder: 'cypress/reports/videos',
    video: false
  }
})
