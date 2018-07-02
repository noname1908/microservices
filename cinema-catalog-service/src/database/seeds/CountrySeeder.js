'use strict'

/*
|--------------------------------------------------------------------------
| CountrySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')

class CountrySeeder {
  async run () {
    const country = await Factory.model('App/Models/Country').create()
    const state = await Factory.model('App/Models/State').make()
    const city = await Factory.model('App/Models/City').make()
    const cinema = await Factory.model('App/Models/Cinema').make()
    const cinemaRoom = await Factory.model('App/Models/CinemaRoom').make()
    const schedule = await Factory.model('App/Models/Schedule').make()

    await country.states().save(state)
    await state.cities().save(city)
    await city.cinemas().save(cinema)
    await cinema.cinemaRooms().save(cinemaRoom)
    await cinemaRoom.schedules().save(schedule)
  }
}

module.exports = CountrySeeder
