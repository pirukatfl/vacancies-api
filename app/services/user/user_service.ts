import User from '#models/user'
import CreateUserInterface from '../../interfaces/crete_user_interface.js'

export default class UserService {
  async create(user: CreateUserInterface) {
    const newUser = new User()

    newUser.email = user.email
    newUser.password = user.password

    return await newUser.save()
  }
}
