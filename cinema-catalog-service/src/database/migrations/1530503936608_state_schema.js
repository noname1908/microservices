'use strict'

const Schema = use('Schema')

class StateSchema extends Schema {
  up () {
    this.create('states', (table) => {
      table.increments()
      table.string('name')
      table.integer('country_id').unsigned()
      table.foreign('country_id').references('countries.id').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('states')
  }
}

module.exports = StateSchema
