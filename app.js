import express, { json } from 'express'
import { moviesRouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'

const app = express()

app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

app.use('/movies',moviesRouter)
/*todos los recursos  que sean MOVIES se recuperan en /movies
app.get('/movies',)

app.get('/movies',(req,res)=>{
    res.json(movies)
})

app.get('/movies/:id',)

app.post('/movies',)

app.delete('/movies/:id',)

app.patch('/movies/:id',)

app.options('/movies/:id',(req,res)=>{
    const origin = req.header('origin')
    if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
        res.header('Access-Control-Allow-Origin',origin)
        res.header('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE')
        
    }res.send(200)
})
*/
const PORT = process.env.PORT ?? 1234

app.listen(PORT, () =>{
    console.log(`server listening on port http://localhost:${PORT}`)
})
