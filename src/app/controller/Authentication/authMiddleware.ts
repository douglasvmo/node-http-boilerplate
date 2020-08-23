import { Request, Response, NextFunction } from 'express'


export const isLoggedIn = () => {

    return (req: Request, res: Response, next: NextFunction) => {
        if (req.isAuthenticated()) {
            return next()
        }
        console.warn("access denied redirected to index")
        return res.redirect('/');
    }
}