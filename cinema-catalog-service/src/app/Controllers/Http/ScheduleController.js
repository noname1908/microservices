'use strict'

/**
 * Resourceful controller for interacting with schedules
 */
class ScheduleController {
  /**
   * Show a list of all schedules.
   * GET schedules
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new schedule.
   * GET schedules/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new schedule.
   * POST schedules
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single schedule.
   * GET schedules/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing schedule.
   * GET schedules/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update schedule details.
   * PUT or PATCH schedules/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a schedule with id.
   * DELETE schedules/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ScheduleController
