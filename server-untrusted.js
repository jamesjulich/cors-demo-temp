const express = require('express')
const path = require('path');
const app = express()
const port = 4000

// Serves server-untrusted-index.html at GET http://localhost:4000/
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'server-untrusted-index.html'));
})

app.listen(port, () => {
  console.log(`Untrusted server listening on port ${port}`)
})
