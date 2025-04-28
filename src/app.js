require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo.js')

const app = express();
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.sendFile(
  path.join(__dirname, ".", "pages", "index.html")
))

app.use('/api', require('./routes'))

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

dbConnect()



