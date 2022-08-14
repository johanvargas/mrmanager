const express = require('express')
const router = express.Router()

// homepage
router.get('/', (req, res) => {
  const title = "Mr Manager"
  res.send(`
    <html>
    <head>
    <title> ${title} </title>
    <link rel="stylesheet" href="styles.css"></head>
    <body>
    <h1> ${title} </h1>
    <p> Welcome to ${title} </p>
    <a href="/menu"><p> This is a menu </p></a>
    </body>
    </html>
    `)
})

// route to actual menu
// no UI yet, json

router.get('/menu', (req, res) => {
  const menu = {
    "spiegel": "dynamic menu service"
  }
  res.json(menu)
})

// post forbidden provisionally
router.post('/', (req, res) => {
  res.redirect(403, "/")
})

module.exports = router
