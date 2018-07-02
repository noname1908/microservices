'use strict'

const Model = use('Model')

class Country extends Model {
    states () {
        return this.hasMany('App/Models/State', 'id', 'country_id')
    }
}

module.exports = Country
