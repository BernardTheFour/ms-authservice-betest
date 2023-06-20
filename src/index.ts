import express from 'express'
import dotenv from 'dotenv';
import path from 'path'
import router from './routes/main';

dotenv.config({path: path.resolve(__dirname, '../.env')})

export const env = {
    SERVER_PORT: process.env.SERVER_PORT
}

const app = express()

app.use(express.json());
app.use('/api', router)

app.listen(env.SERVER_PORT, ()=> {
    console.log(`[server] Server is running on ${env.SERVER_PORT}`)
})

