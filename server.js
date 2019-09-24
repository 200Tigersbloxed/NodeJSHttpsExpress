const express = require('express')
var serveIndex = require('serve-index');
const app = express()
const port = 3000

app.use(express.static(__dirname, {
    extensions: ['html', 'htm'],
}));

app.use(function (req, res, next) {
    res.status(404).send("404 ERROR - File or Page does not exist")
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))