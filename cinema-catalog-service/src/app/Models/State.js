'use strict'

const Model = use('Model')

class State extends Model {
    cities () {
        return this.hasMany('App/Models/City', 'id', 'state_id')
    }

    country () {
        return this.belongsTo('App/Models/Country', 'state_id', 'id')
    }
}

module.exports = State
