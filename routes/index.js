const express = require('express')
const router = express.Router()

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
    <p> This is a menu </p>
    </body>
    </html>
    `)
})

module.exports = router
