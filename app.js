// https://www.linode.com/docs/guides/build-react-video-streaming-app/
const express = require("express")
const path    = require("path")
const index   = require("./routes/index")
const logger  = require('./middleware/logger');

const app = express()

app.use(logger())
app.use(express.static(path.join(__dirname, "public")))
app.use("/", index)
app.use(function ( req, res ) {
  const json = {
    "404": "page does not exist"
  }
  res.status(404).json(json)
})

app.listen(3000, () => {
  console.log('Listening on port 3000...')
})
