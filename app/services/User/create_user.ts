import User from '#models/user'
import DatabaseUserRepository from '../../interfaces/user/database_user_repository.js'
import { inject } from '@adonisjs/core'

@inject()
export default class CreateUser {
  constructor(protected databaseUserRepository: DatabaseUserRepository) {}

  public async execute(email: string, password: string): Promise<User> {
    const user = new User()
    user.email = email
    user.password = password

    if (!user.isValidEmail()) {
      throw new Error('Invalid email format')
    }

    return this.databaseUserRepository.save(user)
  }
}
