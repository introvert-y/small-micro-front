const express = require('express');
const app = express();
const fallback = require('express-history-api-fallback')
const path = require('path')

const directory = 'dist';
console.log('directory', directory);
const port = 9200;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(function(req, res, next) {
  console.log(req.originalUrl);
  next();
});
app.get('/*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));

})
// app.use(express.static(directory));
// console.log('express.static(directory)', express.static(directory))
// app.use(fallback('index.html', { root: express.static(directory) }))

app.listen(port, () => console.log(`HTTP server listening on port ${port}, exposing directory ${directory}.`));
