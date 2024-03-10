import express, { Application } from 'express'
import { authRoutes } from './auth/presentation/routes/authRoutes'
import{postRoutes} from './posts/presentation/routes/postRoutes'
import {authDependencies} from './_boot/dependencies'
import {postDependencies} from './_boot/dependencies'
import {connect} from './_boot/databse'
import cors from 'cors'
import { configDotenv } from 'dotenv'
import path from 'path'
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

app.use(express.static(path.join(__dirname,'..','public')))

app.use('/auth',authRoutes(authDependencies))

app.use('/post',postRoutes(postDependencies))

app.listen(PORT,()=>console.log(`server running on the port ${PORT}`))

