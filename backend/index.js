const express = require('express')

const {userRouter, hotelRouter} = require('./routers')


const app = express() 

const cors = require('cors') 

app.use(cors())
app.use(express.json())

const PORT = 5000 

app.use('/user', userRouter)

app.use('/hotel', hotelRouter)


app.listen(PORT, () => console.log(`PORT: >> ${PORT}`))