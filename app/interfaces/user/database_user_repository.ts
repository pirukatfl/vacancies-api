// app/Repositories/DatabaseUserRepository.ts

import User from '#models/user'
import { Database } from '@adonisjs/lucid/database'
import UserRepository from '../user_repository.js'

export default class DatabaseUserRepository implements UserRepository {
  public async save(user: User): Promise<User> {
    try {
      await user.save()
      return user
    } catch (error) {
      console.error('Erro ao salvar usuário:', error)
      throw error
    }
  }

  public async findById(id: number): Promise<User | null> {
    try {
      return User.find(id)
    } catch (error) {
      console.error('Erro ao buscar usuário por ID:', error)
      throw error
    }
  }

  public async findByEmail(email: string): Promise<User | null> {
    try {
      return User.findBy('email', email)
    } catch (error) {
      console.error('Erro ao buscar usuário por email:', error)
      throw error
    }
  }

  public async getAllUsers(page: number = 1, perPage: number = 10): Promise<User[]> {
    try {
      return User.query().paginate(page, perPage)
    } catch (error) {
      console.error('Erro ao listar usuários:', error)
      throw error
    }
  }
}
