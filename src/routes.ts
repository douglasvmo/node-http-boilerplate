import { Router } from 'express'

const router = Router()

//pages
router.get('/', (req, res) => res.render('Index', { msg: "hello wolrd" }))

export default router