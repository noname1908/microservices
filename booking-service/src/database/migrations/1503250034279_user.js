'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('name')
      table.string('lastName')
      table.string('email')
      table.string('phoneNumber')
      table.string('creditCard')
      table.integer('memberShip')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
