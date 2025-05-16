import User from '#models/user'

export default interface UserRepository {
  save(user: User): Promise<User>
  findById(id: number): Promise<User | null>
}
