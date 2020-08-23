import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid'
import User from '../../model/User';




class UserController {
  async store(req: Request, res: Response) {
    const reposiroty = getRepository(User)
    const { username, email, password } = req.body;

    const userExist = await reposiroty.findOne({ where: { email } })

    if (userExist) {
      return res.render('SigninStatus', { status: "Email already registered" })
    }


    const id = uuidv4()
    const user = reposiroty.create({ id, username, email, password })

    await reposiroty.save(user)

    return res.render('SigninStatus', { status: 'successful registration' })
  }

}

export default new UserController