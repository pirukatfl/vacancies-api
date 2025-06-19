// import type { HttpContext } from '@adonisjs/core/http'
import UserService from '#services/user/user_service'
import { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async create({ request }: HttpContext) {
    const { email, password } = request.body()
    return new UserService().create({ email, password })
  }

  async allUsers() {
    return 'todos usuários'
  }

  async confirmEmail({ params, response }: HttpContext) {
    return new UserService().confirmEmail(params.hash, response)
  }
}
