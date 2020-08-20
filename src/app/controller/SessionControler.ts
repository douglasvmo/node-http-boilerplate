import * as passaport from 'passport'
import { Strategy } from 'passport-local'
import { Request, Response } from 'express'

passaport.use(new Strategy(function (username, passaword, cb) {

}))

export default passaport 