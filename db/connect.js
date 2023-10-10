const mongoose  = require('mongoose')


// เชื่อมต่อโดยใช้ mongoose
const connectDB = (url) => {
    return mongoose.connect(url)
}
module.exports = connectDB