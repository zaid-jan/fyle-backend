const express = require('express')
var bodyParser = require('body-parser')
const app = express();
const { Pool } = require('pg')
const branches = require('./apis/branches').branches
const autocomplete = require('./apis/autocomplete').autocomplete
require ('dotenv/config')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`app listeining on ${port}`)
})

const pool = new Pool({
  user: process.env.user,
  host: process.env.host,
  database: process.env.database,
  password: process.env.password,
  port: process.env.dbPort,
  ssl: process.env.ssl,
})

app.get('/', (req, res) => {
  res.send("up and running");
})

app.get('/api/branches', async (req, res) => {
  const params = req.query;
  const result = await branches(params, pool);
  res.send(result);
  
})

app.get('/api/branches/autocomplete', async (req, res) => {
  const params = req.query;
  const result = await autocomplete(params, pool);
  res.send(result);
})