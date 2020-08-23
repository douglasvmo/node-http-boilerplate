import * as passport from 'passport'
import { getRepository } from 'typeorm'
import User from '../../model/User'
import { Strategy } from 'passport-local'


passport.use(new Strategy({
    usernameField: 'email',
    passwordField: "password"
}, async function (email, password, cb) {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { email } })

    if (!user) {
        return cb(null, false, { message: 'Incorrect username.' });
    }
    const isValidPassword = user.password === password
    if (!isValidPassword) {
        return cb(null, false, { message: 'Incorrect password.' });
    }

    return cb(null, true)

}))

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});



export { passport }