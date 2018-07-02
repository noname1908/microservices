'use strict'

const { test, trait } = use('Test/Suite')('Movie')
const Movie = use('App/Models/Movie')

trait('Test/ApiClient')

test('can return all movies', async ({ client }) => {
  const movie = await Movie.create({
    title: 'Adonis 101',
    format: 'text',
    description: 'Blog movie content'
  })

  const response = await client.get('/movies').end()

  response.assertStatus(200)
  response.assertJSONSubset([{
    title: 'Adonis 101',
    format: 'text',
    description: 'Blog movie content'
  }])

  await movie.delete()
})

test('can get movie premieres', async ({ client }) => {
  const movie = await Movie.create({
    title: 'Adonis 101',
    format: 'text',
    description: 'Blog movie content'
  })
  
  const response = await client.get('/movies/premieres').end()

  response.assertStatus(200)
  response.assertJSONSubset([{
    title: 'Adonis 101',
    format: 'text',
    description: 'Blog movie content'
  }])

  await movie.delete()
})

test('returns 200 for an known movie', async ({ client }) => {
  const movie = await Movie.create({
    title: 'Adonis 101',
    format: 'text',
    description: 'Blog movie content'
  })

  const response = await client.get('/movies/' + movie.id).end()

  response.assertStatus(200)
  response.assertJSONSubset({
    title: 'Adonis 101',
    format: 'text',
    description: 'Blog movie content'
  })

  await movie.delete()
})
