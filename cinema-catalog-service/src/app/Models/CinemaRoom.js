'use strict'

const Model = use('Model')

class CinemaRoom extends Model {
    cinema () {
        return this.belongsTo('App/Models/Cinema', 'cinema_id', 'id')
    }

    schedules () {
        return this.hasMany('App/Models/Schedule', 'id', 'cinema_room_id')
    }
}

module.exports = CinemaRoom
