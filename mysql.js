const mysql = require('mysql');
const con = mysql.createConnection({
  host: 'database-regeasy.c9nn9omq8yfi.us-east-2.rds.amazonaws.com',
  user: 'admin',
  port:"3306",
  password: 'Tenemosun3312',
  database: 'regeasy',
});

con.connect( (err) =>{
    if(err) throw err
    console.log("Funciona")
})

