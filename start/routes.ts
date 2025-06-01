/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
const UsersController = () => import('#controllers/user/users_controller')
const ProfilesController = () => import('#controllers/profile/profiles_controller')
const AuthController = () => import('#controllers/auth/auth_controller')

router
  .group(() => {
    router
      .group(() => {
        router.get('/all-users', [UsersController, 'allUsers'])
        router.post('/create', [UsersController, 'create'])
      })
      .prefix('/users')

    router
      .group(() => {
        router.post('/:id/update', [ProfilesController, 'createOrUpdate'])
        router
          .get('/:id/detail', [ProfilesController, 'detail'])
          .use(middleware.auth({ guards: ['api'] }))
        router
          .get('/', [ProfilesController, 'getProfiles'])
          .use(middleware.auth({ guards: ['api'] }))
      })
      .prefix('/profiles')
    router
      .group(() => {
        router.post('', [AuthController, 'authentication'])
      })
      .prefix('/auth')
  })
  .prefix('/api')
