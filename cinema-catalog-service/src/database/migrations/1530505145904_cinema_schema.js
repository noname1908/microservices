'use strict'

const Schema = use('Schema')

class CinemaSchema extends Schema {
  up () {
    this.create('cinemas', (table) => {
      table.increments()
      table.string('name')
      table.integer('city_id').unsigned()
      table.foreign('city_id').references('cities.id').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('cinemas')
  }
}

module.exports = CinemaSchema
