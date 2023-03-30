var express = require('express')

var sql = require('mysql')

var app = express()

app.listen(8080)

app.use(express.json())

var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'test'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})

app.get('/', function(req, res){
    res.send('welcome to the world sd')
    res.end()
});


app.get('/about/:id', function(req, res){
    res.send("This is the page number " + req.params.id)
    res.end()
});

app.post('/users', function(req, res, next){
   const {name,password} = req.body;
   console.log(name, password)
   res.send("Successfully")
});

app.post('/person', function(req, res, next){
    const {id, f_name, l_name, address, city} = req.body;
    connection.query('INSERT INTO persons (P ersonID, LastName, FirstName, Address, City) Values(?, ?, ?, ?, ?)', [id, l_name, f_name, address, city], function(err, result) {
       if (err) throw err
     })
    res.send("Successfully")
});

app.get('/persons', function(req, res, next){
    connection.query("select * from persons", function(err, result) {
       if (err) throw err
       console.log(result)
       res.json(result)
     })
 });

 app.put('/person', function(req, res, next){
    const {id, f_name, l_name, address, city} = req.body;
    connection.query('INSERT INTO persons (PersonID, LastName, FirstName, Address, City) Values(?, ?, ?, ?, ?)', [id, l_name, f_name, address, city], function(err, result) {
       if (err) throw err
     })
    res.send("Successfully")
});



app.delete("/delete", (req, res) => {
    res.send("deleted successfully")
})

