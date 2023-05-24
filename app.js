const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv/config')

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());
app.use(cors())

//import routes
const postRoutes = require('./routes/post')

app.use('/post', postRoutes)

app.get('/', (req, res) => {
  res.send('Hello World 3!')
})

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
let db = mongoose.connection
//handle erorr
db.on('error', console.error.bind(console, 'Error Establishing a Database Connection'))
//handle success
db.once('open', ()=> {
    console.log('Database is connected')
})

app.listen(process.env.PORT, () => {
  console.log(`Server Running on Port ${process.env.PORT}`)
})