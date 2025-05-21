import AuthInterface from '../../interfaces/auth_interface.js'
import User from '#models/user'

export default class Auth {
  async authenticate(auth: AuthInterface) {
    const hasEmail = await User.findBy('email', auth.email)
    if (!hasEmail) {
      throw new Error('Email não cadastrado')
    }
    const login = await User.verifyCredentials(auth.email, auth.password)

    if (login) {
      const token = await User.accessTokens.create(login)

      return {
        id: login.$attributes.id,
        email: login.$attributes.email,
        token: token.value!.release(),
      }
    }

    return 'erro ao tentar autenticar'
  }
}
