import 'reflect-metadata';
import './database/connection'
import * as express from 'express'
import routes from './routes'
import { passport } from './app/controller/Authentication'

const app = express()

//handle template engine
app.set('views', __dirname + '/app/views')
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

// handle static assets
app.use(express.static(__dirname + '/app/public'))

//handle session and authentication
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize())
app.use(passport.session())

//handle form data body by post method
app.use(express.urlencoded({
    extended: true,
}))

app.use(routes)


app.listen(3000, () => console.log("🚀 Server started at http://localhost:3000"))