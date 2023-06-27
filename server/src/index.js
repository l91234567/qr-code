const express = require('express');
const path = require('path')
const cors = require('cors');

require('dotenv').config({path: path.join(__dirname, '../.env')})
const routes = require('./controller')

const app = express();


app.use(express.json());
app.use(cors())
app.post('/qrcode', (req, res)=> {
  routes.getQRCode(req, res);
})

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log('listening on port ', port));