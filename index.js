const express = require('express');
const app = express();
const port = 3000;
const low = require('lowdb');
var serveStatic = require('serve-static');
 
const FileSync = require('lowdb/adapters/FileSync');
 
const adapter = new FileSync('db.json');
const db = low(adapter);
 
// Set some defaults
db.defaults({ user: {} })
  .write();
 
db.get('user').push({
     name : 'Linh',
     age : 24
 }).write();

app.set('views', './views');
app.set('view engine', 'pug');


app.get('/', (req, res) => res.send('Hello World!'));
app.get('/library', function(req, res){
    res.render('index');
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));