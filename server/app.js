let express = require('express')
let app = express()

app.get('/asdf', function(req, res){
  res.send('hello world');
});

app.listen(3000);