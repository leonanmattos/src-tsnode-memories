import express from 'express'
import { Request, Response } from 'express'
import IControllerBase from '../interfaces/IControllerBase'

export class UserController implements IControllerBase {

  public router = express.Router()

  constructor() {
    this.initRoutes()
  }

  initRoutes() {
    this.router.get('/', this.index)
  }

  index = (req: Request, res: Response) => {

    res.json({ teste: "oi" })
  }
}
