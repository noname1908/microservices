'use strict'

const Model = use('Model')

class Cinema extends Model {
    city () {
        return this.belongsTo('App/Models/City', 'city_id', 'id')
    }

    cinemaRooms () {
        return this.hasMany('App/Models/CinemaRoom', 'id', 'cinema_id')
    }
}

module.exports = Cinema
