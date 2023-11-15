'use strict'

module.exports = {
  up: (queryInterface) => {
    return queryInterface.createTable('Students', ...Students)
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Students')
  }
}
