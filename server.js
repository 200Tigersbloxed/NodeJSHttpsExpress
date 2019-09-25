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
var https = require('https')
const httpporta = configuration.httpPORT
const httpsporta = configuration.httpsPORT

app.use(express.static(__dirname, {
    extensions: ['html', 'htm'],
}));

app.use(function (req, res, next) {
    res.status(404).send("404 ERROR - File or Page does not exist")
  })

if (configuration.enablehttps == true){
  console.log("HTTPS Enabled")
  https.createServer({
    key: fs.readFileSync(configuration.certkey),
    cert: fs.readFileSync(configuration.cert)
  }, app)
  .listen(configuration.httpsPORT, function () {
    console.log(`Example app listening on port ${configuration.httpsPORT} Go to https://localhost:${configuration.httpsPORT}/`)
  })
}

app.listen(configuration.httpPORT, () => console.log(`HTTP listening on port ${configuration.httpPORT}!`))
