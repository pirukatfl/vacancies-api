import UserRepository from '../../interfaces/user/user_repository.js'
import User from '#models/user'

export default class InMemoryUserRepository implements UserRepository {
  private users: { [key: number]: User } = {}
  private nextId: number = 1

  public async save(user: User): Promise<User> {
    user.id = this.nextId++
    this.users[user.id] = user
    return user
  }

  public async findById(id: number): Promise<User | null> {
    return this.users[id] || null
  }
}
