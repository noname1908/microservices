'use strict'

/**
 * Resourceful controller for interacting with states
 */
class StateController {
  /**
   * Show a list of all states.
   * GET states
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new state.
   * GET states/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new state.
   * POST states
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single state.
   * GET states/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing state.
   * GET states/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update state details.
   * PUT or PATCH states/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a state with id.
   * DELETE states/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = StateController
