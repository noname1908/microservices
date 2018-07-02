'use strict'

/**
 * Resourceful controller for interacting with tickets
 */
class TicketController {
  /**
   * Show a list of all tickets.
   * GET tickets
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new ticket.
   * GET tickets/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new ticket.
   * POST tickets
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single ticket.
   * GET tickets/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing ticket.
   * GET tickets/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update ticket details.
   * PUT or PATCH tickets/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a ticket with id.
   * DELETE tickets/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = TicketController
