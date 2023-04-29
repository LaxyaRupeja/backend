require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express');
const { connection } = require('./Configs/db');
const { taskRouter } = require('./Routes/server.routes');
var cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())
app.use('/task', taskRouter)
app.listen(8080, connection)