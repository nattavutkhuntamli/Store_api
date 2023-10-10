const express = require('express')

require('express-async-errors');

const app  = express()
const dotenv = require('dotenv').config()
const connectDB = require('./db/connect')

app.disable('x-powered-by')
app.use(express.urlencoded({extended:false, limit:"500MB"}))
app.use(express.json())

// routes
app.get('', (req,res) => {
    return res.status(200).json({
        msg:"Store API"
    })
})

app.use('/api/v1/', require('./routes'))

app.use(require('./middleware/not-found'))
app.use(require('./middleware/error-handler'))

const port = dotenv.parsed.PORT;

const start  = async () => {
    try {
       await connectDB(dotenv.parsed.MONGO_URI)
       app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
       console.log(error) 
    }
}

start()