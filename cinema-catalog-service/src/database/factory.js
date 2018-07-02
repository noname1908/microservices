'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

const Factory = use('Factory')

Factory.blueprint('App/Models/Country', async (faker) => {
  return {
    name: faker.word(),
  }
})

Factory.blueprint('App/Models/State', async (faker) => {
  return {
    name: faker.word(),
  }
})

Factory.blueprint('App/Models/City', async (faker) => {
  return {
    name: faker.word(),
  }
})

Factory.blueprint('App/Models/Cinema', async (faker) => {
  return {
    name: faker.word(),
  }
})

Factory.blueprint('App/Models/CinemaRoom', async (faker) => {
  return {
    name: faker.word(),
    capacity: 10,
    price: 71,
    format: 'IMAX'
  }
})

Factory.blueprint('App/Models/Schedule', async (faker) => {
  return {
    time: '10:15',
    movie_id: 1,
    seatsEmpty: '0.0, 1.0, 2.0, 3.0, 4.0',
    seatsOccupied: '5.0, 6.0, 7.0, 8.0, 9.0, 10.0'
  }
})