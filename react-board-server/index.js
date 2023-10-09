const express = require('express')
const app = express()
const PORT = process.env.port || 8000;
const mysql = require('mysql');


const db = mysql.createConnection({
  host: 'localhost',
  user: 'react_bbs',
  password: '12345',
  database: 'react_bbs'
});


db.connect();


app.get('/', (req, res) => {
  //res.send('Hello World!');
  const sqlQeury = "INSERT INTO requested (rowno) values (1)";
  db.query(sqlQeury, function (err, result) {
    if (err) throw err;
    res.send('success');
  });
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// db.end();
