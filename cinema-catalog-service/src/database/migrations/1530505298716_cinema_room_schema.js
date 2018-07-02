'use strict'

const Schema = use('Schema')

class CinemaRoomSchema extends Schema {
  up () {
    this.create('cinema_rooms', (table) => {
      table.increments()
      table.string('name')
      table.integer('capacity')
      table.integer('price')
      table.string('format')
      table.integer('cinema_id').unsigned()
      table.foreign('cinema_id').references('cinemas.id').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('cinema_rooms')
  }
}

module.exports = CinemaRoomSchema
