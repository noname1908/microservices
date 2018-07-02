'use strict'

/**
 * Resourceful controller for interacting with bookings
 */
class BookingController {
  /**
   * Show a list of all bookings.
   * GET bookings
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new booking.
   * GET bookings/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new booking.
   * POST bookings
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single booking.
   * GET bookings/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing booking.
   * GET bookings/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update booking details.
   * PUT or PATCH bookings/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a booking with id.
   * DELETE bookings/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = BookingController
