const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://Admin:Calcium19@prycycleapi.zsnminj.mongodb.net/Prycylce?retryWrites=true&w=majority'

mongoose.connect(connectionString)
.then(()=>console.log('CONNECTED TO MongoDB...'))
.catch((err)=> console.log(err))