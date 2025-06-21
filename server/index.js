import express from 'express'
import { Server } from 'socket.io'
import { createServer } from 'node:http'
import logger from 'morgan'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

import { pool, connectDB } from '../db/conexion.js'

import userRoutes from '../routes/usuario.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
app.use(logger('dev'))

app.use(express.static(join(__dirname, '..', 'vistas')))

const server = createServer(app)
const io = new Server(server, {
  cors: { origin: process.env.CLIENT_URL || `http://localhost:${process.env.PORT} || 1234` },
  methods: ['GET', 'POST']
})

io.on('connection', (socket) => {
  console.log('conectado ...')

  socket.on('client:order_update', (data) => {
    console.log(`orden actualizada por el cliente ${socket.id}`, data)
  })

  socket.on('disconnect', () => {
    console.log('cliente desconectado')
  })
})
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '..', 'vistas', 'bienvenido.html'))
})

const PORT = process.env.PORT ?? 3000

server.listen(PORT, () => {
  console.log(`Se levanto correctamente la aplicacion http://localhost:${PORT}`)
})
