const express = require('express')
const app = express()
const port = 3000

// ExpressJS includes a default OPTIONS route, but it does not include CORS headers by default.

// Serves the text "Hello World!" at GET http://localhost:3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Trusted server listening on port ${port}`)
})
