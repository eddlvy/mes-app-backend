const dotenv = require('dotenv').config({ path: "./config/config.env" });
const cors = require('cors');
const express = require('express');
const app = express();
const connectToDB = require('./config/db-connect');
const loginRouter = require('./routes/loginRouter');
const auth = require('./controllers/authMiddleware');
const getComidaRouter = require('./routes/getComidaRouter');
const updateProductRouter = require('./routes/updateProductRouter');
const updateToZeroRouter = require('./routes/updateToZeroRoute');


connectToDB();
const port = process.env.PORT;
app.use(express.json())
app.use(cors())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, PUT, PATCH, GET, DELETE, OPTIONS");

  next();
})
app.use('/', loginRouter)
app.use('/user', auth, getComidaRouter)
app.use('/user', auth, updateProductRouter)
app.use('/user', auth, updateToZeroRouter)


app.get('/', (req, res) => {
  res.send("Server Running")
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})