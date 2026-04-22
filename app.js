import express from 'express'
import { parrotRouter } from './parrot/router.js'
import morgan from 'morgan'

const app = express()
app.use(express.json())
app.use(morgan('tiny'))

const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use('/parrot', parrotRouter)

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({ name: 'Alex' }))
})

app.listen(3000)
