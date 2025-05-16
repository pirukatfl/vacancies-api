import User from '#models/user'
import UserRepository from '../../interfaces/user/database_user_repository.js'
import { inject } from '@adonisjs/core'

@inject()
export default class GetUser {
  constructor(protected userRepository: UserRepository) {}

  public async execute(id: number): Promise<User | null> {
    return this.userRepository.findById(id)
  }
}
