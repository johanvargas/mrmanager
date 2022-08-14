// https://www.linode.com/docs/guides/build-react-video-streaming-app/
const express = require("express")
const path = require("path")
const index = require("./routes/index")

const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.use("/", index)

app.listen(3000, () => {
  console.log('Listening on port 3000...')
})
