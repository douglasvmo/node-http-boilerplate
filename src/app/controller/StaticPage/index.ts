import { Request, Response, NextFunction } from 'express'

class StaticPageController {
  index(req: Request, res: Response) {

    return res.render("Index")
  }

  signig(req: Request, res: Response) {

    return res.render('Signin')
  }

  dashboard(req: Request, res: Response) {

    return res.render("Dashboard")
  }

}

export default new StaticPageController