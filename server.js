const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const pool = require('./db');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

function uselessAbstractionForFetchingUsers (){
  const text = 'SELECT id, email, firstname, lastname FROM users';
  return pool.query(text);
}

app.get('/showusers', async (req, res) => {
  // const text = 'SELECT id, email, firstname, lastname FROM users';
  try {
    const data = await uselessAbstractionForFetchingUsers();
    // useless because 'await pool.query(text)' would achieve the same thing
    res.send(data.rows);
  } catch (err) {
    res.send(err);
  }
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}...`);
});