
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { connect } from './src/db/db.mongo.js'
import { PORT } from './src/config/env.js'
import { usersRouter } from './src/routes/auth.routes.js'

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(helmet())

app.use(usersRouter)

app.listen(PORT, () => {
    connect()
    console.log(`Server corriendo en el puerto: ${PORT}🚀`)
})
