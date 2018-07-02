'use strict'

const Model = use('Model')

class City extends Model {
    state () {
        return this.belongsTo('App/Models/State', 'state_id', 'id')
    }

    cinemas () {
        return this.hasMany('App/Models/Cinema', 'id', 'city_id')
    }
}

module.exports = City
