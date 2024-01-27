const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/index.html');
});
app.listen(port);
console.log('Server started at http://localhost:' + port);