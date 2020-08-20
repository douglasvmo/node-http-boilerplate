import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import User from '../model/User'


class UserController {
    store(req: Request, res: Response) {
        const db = getRepository(User)
        const { username, email, password } = req.body;
        res.sendStatus(418)



    }
}

export default new UserController