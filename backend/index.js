// use 'npm run devStart' to initiate server

const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require('body-parser');
const cors = require('cors');

const db = mysql.createPool({
  host: "localhost",
  user: "nick",
  password: "password",
  database: "phonebook",
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/get', (req, res) => {
  const sqlSelect = "SELECT * FROM contact_list"
  db.query(sqlSelect, (err, result) => {
    res.send(result)
  })
})

app.post('/api/insert', (req, res) => {

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phone = req.body.phone;

  const sqlInsert = "INSERT INTO contact_list (firstName, lastName, phone) VALUES (?,?,?)"
  db.query(sqlInsert, [firstName, lastName, phone], (err, result) => {
    console.log(result)
  })
})

// --- DELETE --- //
app.delete('/api/delete/:phone', (req, res) => {
  const number = req.params.phone
  const sqlDelete = "DELETE FROM contact_list WHERE phone = ?";

  db.query(sqlDelete, number, (err, result) => {
    if (err) console.log(err)
  })
})

app.listen("3001", () => {
  console.log("running port 3001");
});











  // const sqlInsert =
  //   "INSERT INTO contact_list (firstName, lastName, phone) VALUES ('Jon', 'Smith', '123456789')";
  // db.query(sqlInsert, (err, result) => {
  //   res.send("hello update");
  // });
