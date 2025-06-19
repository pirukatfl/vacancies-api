import User from '#models/user'
import CreateUserInterface from '../../interfaces/crete_user_interface.js'
import EmailService from '#services/email/email_service'

export default class UserService {
  async create(user: CreateUserInterface) {
    const newUserToSave = new User()

    const hasEmail = await User.findBy({ email: user.email })

    if (hasEmail) {
      throw new Error('email já existe!')
    }

    newUserToSave.email = user.email
    newUserToSave.password = user.password

    const newUser = await newUserToSave.save()

    console.log('newUser', newUser)

    const linkToConfirmation = `http://${process.env.HOST}:${process.env.PORT}/api/confirm-email/${newUser.hash_to_email}`
    const mail = new EmailService()
    const options = {
      email: user.email,
      subject: 'Confirme seu email',
      view: 'welcome',
      dataView: {
        link: linkToConfirmation,
      },
    }
    await mail.send(options)

    return { status: 200, message: 'Cadastrado com sucesso!' }
  }

  async confirmEmail(hash: string, response: any) {
    console.log(hash)
    const user = await User.find({ hash_to_email: hash })

    if (!user) {
      return { code: 500, message: 'usuário não encontrado!' }
    }

    if (!user?.hash_to_email_expired) {
      user.hash_to_email_expired = true
      await user?.save()
      response.redirect().toPath(`${process.env.BASE_URL_FRONT}/login`)
    }
    return hash
  }
}
