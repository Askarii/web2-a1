const express = require('express')

const app = express()

const port = process.env.PORT || 5000l
app.listen(port, () => {`Server Listening on port: ${port}`})