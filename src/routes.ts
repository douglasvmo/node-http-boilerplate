import { Router } from 'express'
import { isLoggedIn, passport } from './app/controller/Authentication'
import UserController from './app/controller/User'
import StaticPageController from './app/controller/StaticPage'


const router = Router()

//pages
router.get('/', StaticPageController.index)
router.get('/signin', StaticPageController.signig)
router.get('/dashboard', isLoggedIn(), StaticPageController.dashboard)

router.post('/login', passport.authenticate('local', { failureRedirect: '/', failureMessage: true, successRedirect: '/dashboard', }))

router.post('/users', UserController.store)




export default router;