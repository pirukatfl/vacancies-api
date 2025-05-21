import type { HttpContext } from '@adonisjs/core/http'
import Auth from '#services/authentication/authenticate_service'

export default class AuthController {
  async authentication({ request }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    return new Auth().authenticate({ email, password })
  }
}
