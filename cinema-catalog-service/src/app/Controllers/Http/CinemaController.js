'use strict'

/**
 * Resourceful controller for interacting with cinemas
 */
class CinemaController {
  /**
   * Show a list of all cinemas.
   * GET cinemas
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new cinema.
   * GET cinemas/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new cinema.
   * POST cinemas
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single cinema.
   * GET cinemas/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing cinema.
   * GET cinemas/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update cinema details.
   * PUT or PATCH cinemas/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a cinema with id.
   * DELETE cinemas/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = CinemaController
