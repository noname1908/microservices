'use strict'

/**
 * Resourceful controller for interacting with countries
 */
class CountryController {
  /**
   * Show a list of all countries.
   * GET countries
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new country.
   * GET countries/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new country.
   * POST countries
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single country.
   * GET countries/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing country.
   * GET countries/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update country details.
   * PUT or PATCH countries/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a country with id.
   * DELETE countries/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = CountryController
