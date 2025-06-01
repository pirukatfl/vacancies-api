import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'
import mail from '@adonisjs/mail/services/main'

export default class UsersController {
  async store({ request }: HttpContext) {
    /**
     * For demonstration only. You should validate the data
     * before storing it inside the database.
     */
    const user = await User.create(request.all())

    await mail.send((message) => {
      message
        .to(user.email)
        .from('info@example.org')
        .subject('Verify your email address')
        .htmlView('emails/verify_email', { user })
    })
  }
}
