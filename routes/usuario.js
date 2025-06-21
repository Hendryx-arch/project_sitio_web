import { Router } from 'express'

import { getAllUsers, createUser } from '../controladores/usuario.js'

const router = Router()

router.get('/', getAllUsers)

/* router.get('/:id',getUserById) */
router.post('/', createUser)
/* router.put('/:id',updateUser) */
/* router.delete('/:id',deleteUser) */

export default router
