'use strict'

const Movie = use('App/Models/Movie')

class MovieController {
  async getAllMovies ({ response }) {
    const movies = await Movie.all()
    response.status(200).json(movies)
  }

  async getMoviePremieres ({ response }) {
    const movies = await Movie.query().where('id', '>', 5
  ).fetch()
    response.status(200).json(movies)
  }

  async getMovieById ({ params: { id }, response }) {
    const movie = await Movie.find(id)
    response.status(200).json(movie)
  }
}

module.exports = MovieController
