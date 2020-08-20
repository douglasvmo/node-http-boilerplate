import { Router } from 'express'
import passaport from './app/controller/SessionControler'
import UserController from './app/controller/UserController'

const router = Router()

//pages
router.get('/', (req, res) => res.render('Index', { msg: "hello wolrd" }))
router.get('/signin', (req, res) => res.render('Signin', { msg: "hello wolrd" }))


router.post('/login', (req, res) => { })

router.post('/users', UserController.store)




export default router