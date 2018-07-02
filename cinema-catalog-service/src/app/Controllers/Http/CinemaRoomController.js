'use strict'

/**
 * Resourceful controller for interacting with cinemarooms
 */
class CinemaRoomController {
  /**
   * Show a list of all cinemarooms.
   * GET cinemarooms
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new cinemaroom.
   * GET cinemarooms/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new cinemaroom.
   * POST cinemarooms
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single cinemaroom.
   * GET cinemarooms/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing cinemaroom.
   * GET cinemarooms/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update cinemaroom details.
   * PUT or PATCH cinemarooms/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a cinemaroom with id.
   * DELETE cinemarooms/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = CinemaRoomController
