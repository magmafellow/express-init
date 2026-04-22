const express = require('express')
const app = express()

const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)

app.get('/', (req, res) => {
  // res.send('I am really here!')
  // res.json({ name: 'Gustav' })

  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({ name: 'Alex' }))
})

app.listen(3000)
