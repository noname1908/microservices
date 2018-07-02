'use strict'

const Cinema = use('App/Models/Cinema')
const Schedule = use('App/Models/Schedule')

class ApiController {
    async getCinemasByCity ({ request, response }) {
        const { cityId } = request.get()

        const cinemas = await Cinema.query().where('city_id', cityId).fetch()

        response.status(200).json(cinemas)
    }

    async getCinemaById ({ params: { cinemaId }, response }) {
        const cinema = await Cinema.find(cinemaId)

        response.status(200).json(cinema)
    }

    async getCinemaScheduleByMovie ({ params: { cityId, movieId }, response }) {
        const schedules = await Schedule.query()
            .whereHas('cinemaRoom.cinema', (cinemaRoomQuery) => {
                cinemaRoomQuery.where('city_id', cityId)
            })
            .where('movie_id', movieId)
            .fetch()
        
        response.status(200).json(schedules)
    }
}

module.exports = ApiController
