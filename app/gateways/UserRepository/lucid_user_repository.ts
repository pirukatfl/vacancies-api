import UserRepository from '../../interfaces/user/user_repository.js'
import User from '#models/user'

export default class LucidUserRepository implements UserRepository {
  public async save(user: User): Promise<User> {
    return user.save()
  }

  public async findById(id: number): Promise<User | null> {
    return User.find(id)
  }
}
