require("dotenv").config()

const cors = require('cors')
const express = require('express')
const app = express()
const port = 3000
const router = require("./routers")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })