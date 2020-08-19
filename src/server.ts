import 'reflect-metadata';
import './database/connection'
import * as express from 'express'
import routes from './routes'


const app = express()

app.set('views', __dirname + '/app/views')
app.set('view engine', 'tsx')
app.engine('tsx', require('express-react-views').createEngine())

app.use(express.static(__dirname + '/app/public'))

app.use(routes)


app.listen(3000, () => console.log("🚀 Server started at http://localhost:3000"))