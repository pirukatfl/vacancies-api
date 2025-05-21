import type { HttpContext } from '@adonisjs/core/http'
import ProfileService from '#services/profile/profile_service'

export default class ProfilesController {
  async createOrUpdate({ request, params }: HttpContext) {
    console.log('PARAMS', params)
    const { id } = params
    const { profile } = request.body()
    return new ProfileService().create({ id, profile })
  }

  async detail({ params }: HttpContext) {
    console.log('PARAMS', params)
    const { id } = params
    return new ProfileService().detail(id)
  }
}
