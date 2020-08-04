import App from './app'
import bodyParser from 'body-parser'
import loggerMiddleware from './middlewares/logger'

import { UserController } from './controllers/UserController'

const app = new App({
  port: 3333,
  controllers: [
      new UserController(),
  ],
  middlewares: [
      bodyParser.json(),
      bodyParser.urlencoded({ extended: true }),
      loggerMiddleware
  ]
})

app.listen()
