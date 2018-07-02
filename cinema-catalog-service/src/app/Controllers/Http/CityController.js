'use strict'

/**
 * Resourceful controller for interacting with cities
 */
class CityController {
  /**
   * Show a list of all cities.
   * GET cities
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new city.
   * GET cities/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new city.
   * POST cities
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single city.
   * GET cities/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing city.
   * GET cities/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update city details.
   * PUT or PATCH cities/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a city with id.
   * DELETE cities/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = CityController
