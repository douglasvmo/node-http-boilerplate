import 'reflect-metadata';
import './database/connection'
import * as express from 'express'
import routes from './routes'
import passaport from './app/controller/SessionControler'

const app = express()





app.set('views', __dirname + '/app/views')
app.set('view engine', 'tsx')
app.engine('tsx', require('express-react-views').createEngine())

app.use(express.static(__dirname + '/app/public'))

app.use(passaport.initialize())
app.use(passaport.session())

app.use(express.urlencoded({
    extended: true,
}))

app.use(routes)


app.listen(3000, () => console.log("🚀 Server started at http://localhost:3000"))