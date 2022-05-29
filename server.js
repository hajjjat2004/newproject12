var express = require('express');
var app = express();

app.get('/', (req, res) => res.send('Hello World!') )

app.listen(5000, () => console.log('serve is rnning on port 5000'))

