'use strict'

const Schema = use('Schema')

class ScheduleSchema extends Schema {
  up () {
    this.create('schedules', (table) => {
      table.increments()
      table.string('time')
      table.string('seatsEmpty')
      table.string('seatsOccupied')
      table.integer('movie_id').unsigned()
      table.integer('cinema_room_id').unsigned()
      table.foreign('cinema_room_id').references('cinema_rooms.id').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('schedules')
  }
}

module.exports = ScheduleSchema
