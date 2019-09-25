'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('config.json');
let configuration = JSON.parse(rawdata);
fs.readFile('config.json', (err, data) => {
  if (err) throw err;
  let configuration = JSON.parse(data);
});

const express = require('express')
var serveIndex = require('serve-index');
const app = express()
const port = configuration.porta

app.use(express.static(__dirname, {
    extensions: ['html', 'htm'],
}));

app.use(function (req, res, next) {
    res.status(404).send("404 ERROR - File or Page does not exist")
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
