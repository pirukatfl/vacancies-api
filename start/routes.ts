/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const UsersController = () => import('#controllers/users_controller')

router
  .group(() => {
    router
      .group(() => {
        router.get('/all-users', [UsersController, 'allUsers'])
        router.get('/create', [UsersController, 'create'])
      })
      .prefix('/users')
  })
  .prefix('/api')
