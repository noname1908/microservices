'use strict'

/*
|--------------------------------------------------------------------------
| MovieSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')

class MovieSeeder {
  async run () {
    const movies = await Factory.model('App/Models/Movie').createMany(5)
  }
}

module.exports = MovieSeeder
