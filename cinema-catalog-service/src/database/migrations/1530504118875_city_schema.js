'use strict'

const Schema = use('Schema')

class CitySchema extends Schema {
  up () {
    this.create('cities', (table) => {
      table.increments()
      table.string('name')
      table.integer('state_id').unsigned()
      table.foreign('state_id').references('states.id').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('cities')
  }
}

module.exports = CitySchema
