import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import Fragrance from './routes/fragrances'

interface Bindings {
  API_KEY: string
  API_SECRET: string
}

const app = new Hono<{ Bindings: Bindings }>()

const port = 3000

app.use('/api/*', cors())
app.route('/api/fragrance', Fragrance) 

console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
