'use strict'

const Model = use('Model')

class Schedule extends Model {
    cinemaRoom () {
        return this.belongsTo('App/Models/CinemaRoom', 'cinema_room_id', 'id')
    }
}

module.exports = Schedule
