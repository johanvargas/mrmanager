// https://www.linode.com/docs/guides/build-react-video-streaming-app/
const express = require("express")
const app = express()

// path for ??
app.get('/', (req, res) => {
  res.send('this is a menu')
})

app.listen(3000, () => {
  console.log('Listening on port 3000...')
})
