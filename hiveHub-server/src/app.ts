import express, { Application } from 'express'
import { authRoutes } from './auth/presentation/routes/authRoutes'
import {dependancies} from './_boot/dependencies'
import {connect} from './_boot/databse'
import cors from 'cors'
import { configDotenv } from 'dotenv'
import session = require('express-session')



configDotenv()
const PORT=process.env.PORT || 7700
const app:Application=express()

// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true }
//   }))

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}
app.use(cors(corsOptions));

app.use(express.json())
app.use(express.urlencoded({extended:true}))

connect()

app.use('/auth',authRoutes(dependancies))

app.listen(PORT,()=>console.log(`server running on the port ${PORT}`))

