import { Router } from 'express'
import passaport from './app/controller/SessionControler'
import UserController from './app/controller/UserController'

const router = Router()

function isLoggedIn(request, response, next) {
    // passport adds this to the request object
    if (request.isAuthenticated()) {
        return next();
    }
    response.redirect('/');
}

//pages
router.get('/', (req, res) => res.render('Index', { msg: "hello wolrd" }))
router.get('/signin', (req, res) => res.render('Signin', { msg: "hello wolrd" }))
router.get('/dashboard', isLoggedIn, (req, res) => res.render('SigninStatus', { status: "ok" }))

router.post('/login', passaport.authenticate('local', { failureRedirect: '/', failureMessage: true, successRedirect: '/dashboard', }))

router.post('/users', UserController.store)




export default router