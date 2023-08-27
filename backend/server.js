const express=require('express')
const app = express()
const mysql=require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '122chandrama',
    database: 'medipro'
  })
  connection.connect((err) => {
    if (!! err) {
        console.log("Error connecting to Db");
    }
    else
    {
        console.log("Connected to database")
    }
});